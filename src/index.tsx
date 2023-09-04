import { NavigationContainer } from "@react-navigation/native";
import Constants from 'expo-constants';
import {
  ActivityIndicator,
  Keyboard,
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  View
} from "react-native";
// // ----- Importação necessária para funcionamento do CSS in JS
import Toast from "react-native-toast-message";
import { useTheme } from "styled-components/native";

import AppRouter from "./components/AppRouter";
import { navigationRef } from './components/Navigation';
import toastConfig from "./components/Toaster/config";
import defaultAppRoutes from "./routes";

/**
 * Base da interface com implementação de rotas
 */
const Main = () => {
  const currentTheme = useTheme();
  
  return (
    <View style={{ backgroundColor: currentTheme.colors.backgroundWarning, height: 100, width: 100, flex: 1 }}>
      <View style={{ backgroundColor: currentTheme.colors.actionPrimary, height: Constants.statusBarHeight }}>
        <StatusBar
          backgroundColor={currentTheme.colors.actionPrimary}
          barStyle={Platform.OS == "ios" ? "light-content" : "default"}
          translucent
        />
      </View>
      <SafeAreaView style={{ flex: 1, backgroundColor: currentTheme.colors.backgroundPrimary }}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <NavigationContainer
            ref={navigationRef}
            fallback={<ActivityIndicator color={currentTheme.colors.actionPrimary} />}
          >
            {/*<OrderFormProvider>*/}
            <AppRouter routes={defaultAppRoutes} />
            {/*</OrderFormProvider>*/}
            <Toast config={toastConfig} />
          </NavigationContainer>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
};

/**
 * Estilos nativos
 */
// const styles = StyleSheet.create({
//   tabBar: {
//     elevation: .05,
//     shadowOpacity: .05,
//     borderBottomWidth: 0,
//     borderTopWidth: 0,
//     position: 'absolute',
//     backgroundColor: nativeStyle.Colors.monoWhite,
//     borderRadius: 14,
//     width: '100%'
//   },
//   commonTabHeader: {
//     height: 70,
//     width: '100%',
//     backgroundColor: Colors.actionPrimary,
//     borderBottomLeftRadius: nativeStyle.Radius.large,
//     borderBottomRightRadius: nativeStyle.Radius.large
//   },
//   commonStackHeader: {
//     height: 90,
//     backgroundColor: nativeStyle.Colors.backgroundPrimary
//   },
//   cleanStackHeader: {
//     height: 70,
//     backgroundColor: nativeStyle.Colors.backgroundPrimary
//   },
//   attentionBadge: {
//     backgroundColor: nativeStyle.Colors.actionPrimary,
//     fontFamily: nativeStyle.Typography.familyBody,
//     top: 8,
//     transform: [{ scale: .85 }]
//   },
//   backLabel: {
//     color: Colors.textPrimaryDark,
//     fontFamily: Typography.familyBody__bold,
//     fontSize: nativeStyle.Typography.sizeSmall,
//     marginTop: 'auto',
//     backgroundColor: 'yellow',
//     alignItems: 'flex-end',
//     height: '100%',
//     display: 'flex',
//     alignSelf: 'flex-end'
//   },
//   backArrow: {
//     color: Colors.textPrimaryDark
//   }
// });

export default Main;
