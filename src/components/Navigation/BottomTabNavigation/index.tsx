import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";

import HomeScreen from "../../../domains/Home";
import MainMenuScreen from "../../../domains/MainMenu";
import { AppRoute } from "../../../lib/router";
import HeaderComponent from "../../HeaderComponent";
import { backForbiddenScreens } from "../index";
import { getBottomNavigationNativeStyles } from "./styles";

interface Props {
  route: any,
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
const BottomTabNavigation = ({ tabs = defaultBottomTabs, route }: Props) => {
  // const orderContext = useContext(OrderFormContext);
  // const orderProductCount: number = orderContext?.state.order?.items?.length || 0;
  const currentTheme = useTheme();
  const nativeStyles = getBottomNavigationNativeStyles(currentTheme);
  
  console.log('BOTTOM TAB ROUTE >>>', route);
  
  const isBackForbidden = backForbiddenScreens.indexOf(route.name) !== -1;
  
  return <Tab.Navigator
    backBehavior="order"
    initialRouteName="home"
    screenOptions={{
      headerBackgroundContainerStyle: nativeStyles.commonTabHeaderBgContainer,
      tabBarShowLabel: true,
      // headerShown: true,
      headerStyle: nativeStyles.commonTabHeader,
      // headerTitleContainerStyle: nativeStyles.commonTabHeaderTitleContainer,
      headerTitle: () =>
        <HeaderComponent hideBackAction={isBackForbidden} />,
      tabBarActiveTintColor: currentTheme.colors.primary[5],
      // tabBarStyle: nativeStyles.tabBar,
    }}
    screenListeners={{}}
    safeAreaInsets={{
      bottom: 0
    }}
    sceneContainerStyle={{
      borderStyle: undefined,
      backgroundColor: currentTheme.colors.background.primary,
      paddingBottom: 50
    }}
  >
    { tabs.map((item, index) => (
      <Tab.Screen
        key={index}
        name={item.name!}
        component={item.Component}
        options={item.options}
        initialParams={{
          ...route.params,
          ...item.initialParams
        }}
      />
    )) }
  </Tab.Navigator>;
};

export default BottomTabNavigation;
