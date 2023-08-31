import Constants from 'expo-constants';
import { useFonts } from 'expo-font';
import { Colors, Typography } from "./theme/constants";
import * as nativeStyle from "./theme/native.global";

import {
  ActivityIndicator,
  Keyboard,
  Platform,
  SafeAreaView,
  StatusBar, StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";
// // ----- Importação necessária para funcionamento do CSS in JS
// import { ThemeProvider, ThemeProviderComponent } from "styled-components";
// import Styled from "./modules/styled";
// // -----
import theme from "./theme/light";
import {navigationRef, Tab} from './components/Navigation';
import AppRouter from "./components/AppRouter";
import {NavigationContainer} from "@react-navigation/native";
import Toast from "react-native-toast-message";
import toastConfig from "./components/Toaster/config";

const customFonts = {
  'Colus-Regular': require('./assets/fonts/Colus-Regular.ttf'),
  'Urbanist-Regular': require('./assets/fonts/Urbanist-Regular.ttf'),
  'Urbanist-Light': require('./assets/fonts/Urbanist-Light.ttf'),
  'Urbanist-Bold': require('./assets/fonts/Urbanist-Bold.ttf')
};

/**
 * Componente principal da aplicação
 */
const Main = () => {
  let [fontsLoaded] = useFonts(customFonts);
  if (!fontsLoaded) return <ActivityIndicator />
  
  return (
    // <ThemeProvider theme={theme}>
    <View style={{backgroundColor: Colors.backgroundWarning, height: 100, width: 100, flex: 1}}>
      <View style={{backgroundColor: Colors.actionPrimary, height: Constants.statusBarHeight}}>
        <StatusBar
          backgroundColor={Colors.actionPrimary}
          barStyle={Platform.OS == "ios" ? "light-content" : "default"}
          translucent
        />
      </View>
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.backgroundPrimary}}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <NavigationContainer
            ref={navigationRef}
            fallback={<ActivityIndicator color={Colors.actionPrimary} />}
          >
            {/*<OrderFormProvider>*/}
              <AppRouter />
            {/*</OrderFormProvider>*/}
              <Toast config={toastConfig} />
          </NavigationContainer>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
    // </ThemeProvider>
  );
}

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
    backgroundColor: nativeStyle.Colors.monoWhite,
    borderRadius: 14,
    width: '100%'
  },
  commonTabHeader: {
    height: 70,
    width: '100%',
    backgroundColor: Colors.actionPrimary,
    borderBottomLeftRadius: nativeStyle.Radius.large,
    borderBottomRightRadius: nativeStyle.Radius.large
  },
  commonStackHeader: {
    height: 90,
    backgroundColor: nativeStyle.Colors.backgroundPrimary
  },
  cleanStackHeader: {
    height: 70,
    backgroundColor: nativeStyle.Colors.backgroundPrimary
  },
  attentionBadge: {
    backgroundColor: nativeStyle.Colors.actionPrimary,
    fontFamily: nativeStyle.Typography.familyBody,
    top: 8,
    transform: [{scale: .85}]
  },
  backLabel: {
    color: Colors.textPrimaryDark,
    fontFamily: Typography.familyBody__bold,
    fontSize: nativeStyle.Typography.sizeSmall,
    marginTop: 'auto',
    backgroundColor: 'yellow',
    alignItems: 'flex-end',
    height: '100%',
    display: 'flex',
    alignSelf: 'flex-end'
  },
  backArrow: {
    color: Colors.textPrimaryDark
  }
})

export default Main;
