import { StackActions } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";

/**
 * Cria referência para uso externo
 */
import { navigationRef } from "../index";

const backForbiddenScreens = [
  "home",
  "main-menu",
  "search",
];

/**
 * Navega internamente utilizando parâmetros de rotas da aplicação
 * @param name
 * @param params
 */
const navigate = (name: any, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

/**
 * Compartilha informações entre telas
 * @param args
 */
const push = (...args: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push({ ...args }));
  }
};

const isBackForbidden = route => backForbiddenScreens.indexOf(route.name) !== -1;

/**
 * Trata ação de voltar do sistema
 */
const backButtonHandler = () => {
  if (!navigationRef.current.getCurrentRoute()) return true;
  const currentPage = navigationRef.current.getCurrentRoute().name;
  return backForbiddenScreens.indexOf(currentPage) != -1;
};

/**
 * Aciona navegação e consome identificador customizado em link (separador #)
 * @param link
 * @param params
 * @param callbackFn
 */
const go = (link: string, params?: any, callbackFn?: () => void) => {
  console.log('navigating to:', link, 'with params:', params);

  try {
    if (link.indexOf('http') !== -1 || link.indexOf('itms:') !== -1 || link.indexOf('market:') !== -1) {
      WebBrowser.openBrowserAsync(link);
    } else {
      const [screen, inlineParamId] = link.split('#');
    
      if(!params && (screen && inlineParamId)) {
        navigate(screen, { id: inlineParamId });
      } else {
        navigate(link, params);
      }
    }
  } catch (error) {
    navigate("home");
    console.log("DIRECIONAMENTO: error", error);
    // Toaster.showInfo("Falha no direcionamento", "Não foi possível direcionar a outra página")
  }

};

/**
 * Aciona tela anterior
 */
const back = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

export default {
  go,
  push,
  back,
  backButtonHandler,
  isBackForbidden,
};
