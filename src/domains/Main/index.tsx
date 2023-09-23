import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { useTheme } from "styled-components/native";

import HeaderComponent from "../../components/HeaderComponent";
import { getHeaderNativeStyles } from "../../components/HeaderComponent/styles";
import Navigation from "../../helpers/navigation";
import { AppRoute } from "../../lib/router";
import HomeScreen from "../Home";
import MainMenuScreen from "../MainMenu";

interface BottomNavigationProps {
  route: any,
  tabs: Array<AppRoute>,
}

const mainStackRoutes: Array<AppRoute> = [
  {
    name: 'main-menu',
    Component: MainMenuScreen,
    options: {
      title: "Menu principal",
      headerShown: true,
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

export const getBottomNavigationNativeStyles = currentTheme => StyleSheet.create({
  ...getHeaderNativeStyles(currentTheme),
  tabBar: {
    elevation: 10,
    shadowOpacity: .05,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    position: 'absolute',
    // backgroundColor: currentTheme.colors.light[9],
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
  },
  attentionBadge: {
    backgroundColor: currentTheme.colors.primary[5],
    fontFamily: currentTheme.typography.family.bodyBold,
    top: 8,
    transform: [{ scale: .85 }]
  }
});

/**
 * Rotas relacionadas ao menu inferior da aplicação
 */
const MainStack = ({ bottomTabRoutes = mainStackRoutes, route }: BottomNavigationProps) => {
  // const orderContext = useContext(OrderFormContext);
  // const orderProductCount: number = orderContext?.state.order?.items?.length || 0;
  const currentTheme = useTheme();
  const nativeStyles = getBottomNavigationNativeStyles(currentTheme);
  
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
        <HeaderComponent hideBackAction={Navigation.isBackForbidden(route)} />,
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
    { bottomTabRoutes.map((item, index) => (
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

export default MainStack;
