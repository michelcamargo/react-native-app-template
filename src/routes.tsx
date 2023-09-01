import {AppRoute} from "./lib/router";
import AuthenticationScreen from "./domains/Authentication";
import HomeScreen from "./domains/Home";
import TabNavigator from "./components/Navigation/TabNavigator";
import MainMenuScreen from "./domains/MainMenu";

const bottomTabAppRoutes: Array<AppRoute> = [
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
]

const TabNavigation = <TabNavigator tabs={bottomTabAppRoutes} />;

const appRoutes: Array<AppRoute> = [
  // {
  //   name: 'splash',
  //   Component: <></>,
  //   options: {
  //     headerShown: false,
  //     detachPreviousScreen: true,
  //     gestureEnabled: false
  //   }
  // },
  {
    name: 'login',
    Component: AuthenticationScreen,
    options: {
      title: "Login",
      headerShown: false,
      detachPreviousScreen: true,
      gestureEnabled: false
    }
  },
  {
    name: 'main',
    Component: TabNavigation,
    options: {
      title: "Tabs",
      headerShown: false,
      detachPreviousScreen: true,
      gestureEnabled: false
    }
  },
]

export default appRoutes;
