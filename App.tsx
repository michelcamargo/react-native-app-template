import {
  ActivityIndicator,
  Alert,
  BackHandler,
  Keyboard,
  Platform,
  SafeAreaView,
  StatusBar, StyleSheet,
  TouchableWithoutFeedback,
  View,
  TextInput
} from "react-native";
import {useEffect} from "react";
import {useFonts} from "expo-font";
import { Stack, navigationRef } from './src/components/Navigation';
import { registerRootComponent } from "expo";
import theme from './src/theme'
import AuthenticationScreen from "./src/domains/Authentication";
import TabNavigator from "./src/components/Navigation/tab-navigator";
import toastConfig from "./src/components/Toaster/config";
import Toast from "react-native-toast-message";
import * as nativeStyle from "./src/theme/native.global";
import {NavigationContainer} from "@react-navigation/native";
import HeaderComponent from "./src/components/HeaderComponent";
import { GluestackUIProvider, Text, Box, config } from "@gluestack-ui/themed"

const customFonts = {
  // 'Colus-Regular': require('./src/assets/fonts/Colus-Regular.ttf'),
};

export default function App() {
  // const { registerForPushNotificationsAsync, handleNotificationResponse } = useNotifications();
  
  const currentTheme = theme.lightTheme;
  
  /**
   * Inicialização da aplicação
   */
  useEffect(() => {
  //   requestTrackingPermissionsAsync().then(res => {
  //     if (res.status === 'granted') {
  //       console.log('Yay! I have user permission to track data');
  //     }
  //   });
  //
  //   BackHandler.addEventListener('hardwareBackPress', handleBackButton);
  //
  //
  //
  //   registerForPushNotificationsAsync();
  //   Notifications.setNotificationHandler({
  //     handleNotification: async () => ({
  //       shouldShowAlert: true,
  //       shouldPlaySound: true,
  //       shouldSetBadge: true,
  //       priority: Notifications.AndroidNotificationPriority.MAX
  //     }),
  //   });
  //
  //   // const firedResponseListener =
  //   //   Notifications.addNotificationReceivedListener(
  //   //      handleNotificationResponse
  //   //   );
  //
  //   const interactResponseListener =
  //     Notifications.addNotificationResponseReceivedListener(
  //       handleNotificationResponse
  //     )
  //
  //   return () => {
  //     if (interactResponseListener) Notifications.removeNotificationSubscription(interactResponseListener);
  //   }
  }, [])

  let [fontsLoaded] = useFonts(customFonts);
  if (!fontsLoaded) return <ActivityIndicator />;
  
  /**
   * Faz com que a fonte padrão do celular não afete a fonte do app
   */
  if ((Text as any).defaultProps == null) (Text as any).defaultProps = {};
  (Text as any).defaultProps.allowFontScaling = false;
  
  /**
   * Bloqueia ação de voltar do celular nas telas descritas
   */
  const handleBackButton = () => {
    const pageNames: Array<string> = [
      "home",
      "main-menu",
      "search",
    ]
    if(!navigationRef.current.getCurrentRoute()) return true;
    let currentPage = navigationRef.current.getCurrentRoute().name;
    return pageNames.indexOf(currentPage) != -1;
  }
  
  
  return (
    // <ThemeProvider theme={currentTheme}>
    <GluestackUIProvider config={config.theme}>
      {/*<View style={{backgroundColor: currentTheme.colors.actionPrimary, height: currentTheme.screen.height}}>*/}
      {/*  <StatusBar*/}
      {/*    backgroundColor={currentTheme.colors.actionPrimary}*/}
      {/*    barStyle={Platform.OS == "ios" ? "light-content" : "default"}*/}
      {/*    translucent*/}
      {/*  />*/}
      {/*</View>*/}
      <SafeAreaView style={{flex: 1, backgroundColor: currentTheme.colors.backgroundPrimary}}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <NavigationContainer
            ref={navigationRef}
            fallback={<ActivityIndicator color={currentTheme.colors.actionPrimary} />}
          >
            {/*<OrderFormProvider>*/}
            <Stack.Navigator
              screenOptions={{
                headerStyle: styles.commonStackHeader,
                headerTitle: () => <HeaderComponent />,
                headerLeftContainerStyle: {width: 0},
                cardStyle: {backgroundColor: currentTheme.colors.backgroundPrimary}
              }}
              defaultScreenOptions={{
                headerLeftContainerStyle: { width: 0 }
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
                component={TabNavigator}
                options={{
                  title: "Tabs",
                  headerShown: false,
                  detachPreviousScreen: true,
                  gestureEnabled: false,
                }}
              />
            </Stack.Navigator>
            <Toast config={toastConfig} />
            {/*</OrderFormProvider>*/}
          </NavigationContainer>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

registerRootComponent(App);

/**
 * Estilos nativos
 */
const styles = StyleSheet.create({
  tabBar: {
    elevation: .05,
    shadowOpacity: .05,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    position: 'absolute',
    backgroundColor: theme.lightTheme.colors.monoWhite,
    borderRadius: 14,
    width: '100%'
  },
  commonTabHeader: {
    height: 70,
    width: '100%',
    backgroundColor: theme.lightTheme.colors.actionPrimary,
    borderBottomLeftRadius: nativeStyle.Radius.large,
    borderBottomRightRadius: nativeStyle.Radius.large,
    elevation: 8,
  },
  commonStackHeader: {
    height: 90,
    backgroundColor: nativeStyle.Colors.backgroundPrimary,
    elevation: 8
  },
  cleanStackHeader: {
    height: 70,
    backgroundColor: nativeStyle.Colors.backgroundPrimary,
    elevation: 8
  },
  attentionBadge: {
    backgroundColor: nativeStyle.Colors.actionPrimary,
    fontFamily: nativeStyle.Typography.familyBody,
    top: 8,
    transform: [{scale: .85}]
  },
  backLabel: {
    color: theme.lightTheme.colors.textPrimaryDark,
    fontFamily: theme.lightTheme.typography.familyBody__bold,
    fontSize: nativeStyle.Typography.sizeSmall,
    marginTop: 'auto',
    alignItems: 'flex-end',
    height: '100%',
    display: 'flex',
    alignSelf: 'flex-end'
  },
  backArrow: {
    color: theme.lightTheme.colors.textPrimaryDark
  }
})
