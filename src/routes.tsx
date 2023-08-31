import {AppRoute} from "./lib/router";
import AuthenticationScreen from "./domains/Authentication";
import HomeScreen from "./domains/Home";
import TabNavigator from "./components/Navigation/tab-navigator";

const defaultAppRoutes: Array<AppRoute> = [
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
    Component: TabNavigator,
    options: {
      title: "Tabs",
      headerShown: false,
      detachPreviousScreen: true,
      gestureEnabled: false
    }
  },
]

const bottomTabAppRoutes: Array<AppRoute> = [
  // {
  //   name: 'main-menu',
  //   Component: <></>,
  //   options: {
  //     title: "menu",
  //     headerShown: false,
  //     tabBarIcon: ({color, size}) => <Icon.Search color={color} size={32}/>,
  //     detachPreviousScreen: true,
  //     gestureEnabled: false
  //   }
  // },
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

export default {
  defaultAppRoutes,
  bottomTabAppRoutes,
};
