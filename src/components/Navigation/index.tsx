import { createNavigationContainerRef, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as WebBrowser from "expo-web-browser";

import { RootStackParamList } from "../../lib/router";

// import Survicate from "@survicate/react-native-survicate";

/**
 * Cria referência para uso externo
 */
export const navigationRef = createNavigationContainerRef<RootStackParamList>();

/**
 * Pilha de navegação padrão
 */
export const Stack = createStackNavigator();

/**
 * Aciona browser interno
 * @param url
 */
const externalNavigate = (url: string) => {
  WebBrowser.openBrowserAsync(url);
};

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
export const push = (...args: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push({ ...args }));
  }
};

/**
 * Aciona navegação e consome identificador customizado em link (separador #)
 * @param link
 * @param params
 * @param callbackFn
 */
export const anchorNavigate = (link: string, params?: any, callbackFn?: () => void) => {
  console.log('navigating to:', link, 'with params:', params);

  try {
    if (link.indexOf('http') !== -1 || link.indexOf('itms:') !== -1 || link.indexOf('market:') !== -1) {
      externalNavigate(link);
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
export const anchorBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};
