import BottomTabNavigation from './components/Navigation/BottomTabNavigation';
import AuthenticationScreen from './domains/Authentication';
import { AppRoute } from './lib/router';

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
      title: 'Login',
      headerShown: false,
      detachPreviousScreen: true,
      gestureEnabled: false
    }
  },
  {
    name: 'main',
    Component: BottomTabNavigation,
    options: {
      title: 'Tabs',
      headerShown: false,
      detachPreviousScreen: true,
      gestureEnabled: false
    }
  },
];

export default defaultAppRoutes;
