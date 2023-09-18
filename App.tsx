import { useEffect, useState } from "react";

import { GluestackUIProvider, Text, config } from "@gluestack-ui/themed";
import { registerRootComponent } from "expo";
import { useFonts } from "expo-font";
import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";
import {
  ActivityIndicator,
  BackHandler,
} from "react-native";
import Toast from "react-native-toast-message";
import { ThemeProvider } from "styled-components/native";

import AppRouter from "./src";
import DeviceStatusBar from "./src/components/DeviceStatusBar";
import DeviceWorkableArea from "./src/components/DeviceWorkableArea";
import { navigationRef } from './src/components/Navigation';
import toastConfig from "./src/components/Toaster/config";
import appThemes from "./src/theme";

const customFonts = {
  // 'Colus-Regular': require('./assets/fonts/Colus-Regular.ttf'),
  // 'Urbanist-Regular': require('./assets/fonts/Urbanist-Regular.ttf'),
  // 'Urbanist-Light': require('./assets/fonts/Urbanist-Light.ttf'),
  // 'Urbanist-Bold': require('./assets/fonts/Urbanist-Bold.ttf')
};

/**
 * Raiz da aplicação
 */
export default function App() {
  // const { registerForPushNotificationsAsync, handleNotificationResponse } = useNotifications();
  
  const [currentTheme, setCurrentTheme] = useState(appThemes[0]);
  const [fontsLoaded] = useFonts(customFonts);
  
  const appThemeHandler = keyName => {
    const theme = appThemes.find(availableTheme => availableTheme.key === keyName);
    
    if (!theme) return;
    
    setCurrentTheme(theme);
  };
  
  /**
   * Lista de telas onde a ação de voltar é bloqueada
   */
  const forbiddenGoBackScreens: Array<string> = [
    "home",
    "main-menu",
    "search",
  ];
  
  /**
   * Solicita permissões para o uso da aplicação
   */
  const requestAppPermissions = () => {
    requestTrackingPermissionsAsync().then(res => {
      if (res.status !== 'granted') {
        console.log('Permissões de tracking não garantidas.');
      }
    });
  };
  
  /**
   * Trata notificações da aplicação
   */
  const runNotificationService = () => {
    // registerForPushNotificationsAsync();
    // Notifications.setNotificationHandler({
    //   handleNotification: async () => ({
    //     shouldShowAlert: true,
    //     shouldPlaySound: true,
    //     shouldSetBadge: true,
    //     priority: Notifications.AndroidNotificationPriority.MAX
    //   }),
    // });

    // const firedResponseListener =
    //   Notifications.addNotificationReceivedListener(
    //      handleNotificationResponse
    //   );

    // const interactResponseListener =
    //     Notifications.addNotificationResponseReceivedListener(
    //       handleNotificationResponse
    //     );

    return () => {
      // if (interactResponseListener) Notifications.removeNotificationSubscription(interactResponseListener);
    };
  };
  
  // Impede que o sistema sobrescreva as fonte da aplicação
  // eslint-disable-next-line
  if ((Text as any).defaultProps == null) (Text as any).defaultProps = {};
  // eslint-disable-next-line
  (Text as any).defaultProps.allowFontScaling = false;
  
  /**
   * Inicialização
   */
  useEffect(() => {
    requestAppPermissions();
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
  
    runNotificationService();
  }, []);
  
  if (!fontsLoaded) return <ActivityIndicator />;
  
  /**
   * Trata ação de voltar do sistema
   */
  const handleBackButton = () => {
    if (!navigationRef.current.getCurrentRoute()) return true;
    const currentPage = navigationRef.current.getCurrentRoute().name;
    return forbiddenGoBackScreens.indexOf(currentPage) != -1;
  };
  
  return (
    <ThemeProvider theme={currentTheme}>
      <GluestackUIProvider config={config.theme}>
        <DeviceStatusBar />
        <DeviceWorkableArea keyboardDismiss>
          <AppRouter currentTheme={currentTheme} themeHandler={appThemeHandler} />
        </DeviceWorkableArea>
        <Toast config={toastConfig} />
      </GluestackUIProvider>
    </ThemeProvider>
  );
}

registerRootComponent(App);
