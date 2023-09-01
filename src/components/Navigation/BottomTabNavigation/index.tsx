import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from 'react-native';

import HomeScreen from "../../../domains/Home";
import MainMenuScreen from "../../../domains/MainMenu";
import { AppRoute } from "../../../lib/router";
import * as nativeStyle from "../../../theme/native.global";
import HeaderComponent from "../../HeaderComponent";

interface Props {
  tabs: Array<AppRoute>,
}

const defaultBottomTabs: Array<AppRoute> = [
  {
    name: 'main-menu',
    Component: MainMenuScreen,
    options: {
      title: "menu",
      headerShown: false,
      // tabBarIcon: ({color, size}) => <Icon.Search color={color} size={32}/>,
      detachPreviousScreen: true,
      gestureEnabled: false
    }
  },
  {
    name: 'home',
    Component: HomeScreen,
    options: {
      title: "Início",
      // tabBarIcon: ({color, size}) => <Icon.Home color={color} size={32} />,
      unmountOnBlur: false
    },
  },
];

/**
 * Cria barra inferior de navegação
 */
export const Tab = createBottomTabNavigator();

/**
 * Rotas relacionadas ao menu inferior da aplicação
 */
const BottomTabNavigation = ({ tabs = defaultBottomTabs }: Props) => {
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
  </Tab.Navigator>;
};

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
    transform: [{ scale: .85 }]
  }
});

export default BottomTabNavigation;
