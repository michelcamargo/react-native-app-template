import { useEffect, useState } from "react";

import { GluestackUIProvider, Text, config } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";
import { useFonts } from "expo-font";
import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";
import {
  ActivityIndicator,
  BackHandler,
  StyleSheet,
} from "react-native";
import Toast from "react-native-toast-message";
import { ThemeProvider } from "styled-components/native";

import DeviceStatusBar from "./src/components/DeviceStatusBar";
import DeviceWorkableArea from "./src/components/DeviceWorkableArea";
import HeaderComponent from "./src/components/HeaderComponent";
import { getHeaderNativeStyles } from "./src/components/HeaderComponent/styles";
import LoadingFeedback from "./src/components/LoadingFeedback";
import { Stack, navigationRef } from './src/components/Navigation';
import BottomTabNavigation from "./src/components/Navigation/BottomTabNavigation";
import toastConfig from "./src/components/Toaster/config";
import AuthenticationScreen from "./src/domains/Authentication";
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
  
  const appThemeHandler = keyName => {
    const theme = appThemes.find(availableTheme => availableTheme.key === keyName);
    
    if (!theme) return;
    
    setCurrentTheme(theme);
  };
  
  const headerNativeStyles = getHeaderNativeStyles(currentTheme);
  
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
          <NavigationContainer
            ref={navigationRef}
            fallback={<LoadingFeedback minimal />}
          >
            {/*<OrderFormProvider>*/}
            <Stack.Navigator
              screenOptions={{
                headerStyle: headerNativeStyles.commonStackHeader,
                headerTitle: () => <HeaderComponent />,
                headerLeftContainerStyle: { width: 0 },
                cardStyle: { backgroundColor: currentTheme.colors.background.primary }
              }}
              defaultScreenOptions={{
                headerLeftContainerStyle: { width: 0 },
              }}
              defaultInitialParams={{
                changeTheme: targetTheme => appThemeHandler(targetTheme),
              }}
            >
              {/*    <Stack.Screen*/}
              {/*      name="splash"*/}
              {/*      component={SplashScreen}*/}
              {/*      options={{*/}
              {/*        headerShown: false,*/}
              {/*        detachPreviousScreen: true,*/}
              {/*        gestureEnabled: false*/}
              {/*      }}*/}
              {/*    />*/}
              <Stack.Screen
                name="auth"
                component={AuthenticationScreen}
                options={{
                  title: "Login",
                  headerShown: false,
                  detachPreviousScreen: true,
                  gestureEnabled: false,
                }}
              />
              <Stack.Screen
                name="main"
                component={BottomTabNavigation}
                options={{
                  title: "Tabs",
                  headerShown: false,
                  detachPreviousScreen: true,
                  gestureEnabled: false,
                }}
                initialParams={{
                  changeTheme: targetTheme => appThemeHandler(targetTheme),
                }}
              />
            </Stack.Navigator>
            <Toast config={toastConfig} />
            {/*</OrderFormProvider>*/}
          </NavigationContainer>
        </DeviceWorkableArea>
      </GluestackUIProvider>
    </ThemeProvider>
  );
}

registerRootComponent(App);

/**
 * Estilos nativos
 */
const styles = StyleSheet.create({
  // tabBar: {
  //   elevation: .05,
  //   shadowOpacity: .05,
  //   borderBottomWidth: 0,
  //   borderTopWidth: 0,
  //   position: 'absolute',
  //   // backgroundColor: currentTheme.colors.monoWhite,
  //   borderRadius: 14,
  //   width: '100%'
  // },
  // attentionBadge: {
  //   backgroundColor: nativeStyle.Colors.actionPrimary,
  //   fontFamily: nativeStyle.Typography.familyBody,
  //   top: 8,
  //   transform: [{ scale: .85 }]
  // },
  // backLabel: {
  //   // color: theme.lightTheme.colors.textPrimaryDark,
  //   // fontFamily: theme.lightTheme.typography.familyBody__bold,
  //   fontSize: nativeStyle.Typography.sizeSmall,
  //   marginTop: 'auto',
  //   alignItems: 'flex-end',
  //   height: '100%',
  //   display: 'flex',
  //   alignSelf: 'flex-end'
  // },
  backArrow: {
    // color: theme.lightTheme.colors.textPrimaryDark
  }
});
