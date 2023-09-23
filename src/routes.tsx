import AuthenticationScreen from './domains/Authentication';
import MainStack from "./domains/Main";
import { AppRoute } from './lib/router';

const APP_DEFAULT_ROUTES: Array<AppRoute> = [
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
    Component: MainStack,
    options: {
      title: 'MainStack',
      headerShown: false,
      detachPreviousScreen: true,
      gestureEnabled: false
    }
  },
];

export default APP_DEFAULT_ROUTES;
