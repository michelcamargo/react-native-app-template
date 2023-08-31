import { StyleSheet } from 'react-native';
import {Stack, Tab} from '../index';
import * as nativeStyle from "../../../theme/native.global";
import {AppRoute} from "../../../lib/router";
// import MainMenuView, { MainMenuHeader } from "../../../screens/main-menu";
// import Icon from "../../iconpack";
// import HomeView from "../../../screens/home";
// import CartView, { CartHeader } from "../../../screens/cart/";
// import ProfileView, { ProfileHeader } from "../../../screens/profile";
// import HeaderComponent from "../../header/default";
// import SearchView from "../../../screens/search";
// import {OrderFormContext} from "../../order/order-form-context";
// import LoginView from "../../../screens/authentication";
import routes from '../../../routes';
import HeaderComponent from "../../HeaderComponent";

interface Props {
  tabs?: Array<AppRoute>,
}

/**
 * Rotas principais da aplicação (Abas inferiores)
 */
const TabNavigator = ({ tabs = routes.bottomTabAppRoutes}: Props) => {
  // const orderContext = useContext(OrderFormContext);
  // const orderProductCount: number = orderContext?.state.order?.items?.length || 0;
  
  return <Tab.Navigator
    backBehavior="order"
    initialRouteName="home"
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: true,
      headerStyle: styles.commonTabHeader,
      headerTitle: () =>
        <HeaderComponent />,
      tabBarActiveTintColor: nativeStyle.Colors.actionPrimary,
      tabBarStyle: styles.tabBar,
    }}
    screenListeners={{}}
    safeAreaInsets={{
      bottom: 0
    }}
    sceneContainerStyle={{
      borderStyle: undefined,
      backgroundColor: nativeStyle.Colors.backgroundPrimary,
      paddingBottom: 50
    }}
  >
    { tabs.map((item, index) => (
      <Tab.Screen
        key={index}
        name={item.name!}
        component={item.Component}
        options={item.options}
        initialParams={item.initialParams}
      />
    )) }
  </Tab.Navigator>
}

/**
 * Estilos nativos
 */
const styles = StyleSheet.create({
  tabBar: {
    elevation: 10,
    shadowOpacity: .05,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    position: 'absolute',
    backgroundColor: nativeStyle.Colors.monoWhite,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    width: '100%'
  },
  commonTabHeader: {
    height: 70,
    backgroundColor: nativeStyle.Colors.actionPrimary,
    borderBottomLeftRadius: nativeStyle.Radius.large,
    borderBottomRightRadius: nativeStyle.Radius.large
  },
  attentionBadge: {
    backgroundColor: nativeStyle.Colors.actionPrimary,
    fontFamily: nativeStyle.Typography.familyBody__bold,
    top: 8,
    transform: [{scale: .85}]
  }
})

export default TabNavigator;
