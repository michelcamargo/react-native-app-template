import { createNavigationContainerRef, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HeaderComponent from "./components/HeaderComponent";
import LoadingFeedback from "./components/LoadingFeedback";
import { AppRoute, RootStackParamList } from "./lib/router";
import DEFAULT_ROUTES from "./routes";

interface Props {
  themeHandler: (targetTheme: string) => void,
  currentTheme: any,
  routes?: Array<AppRoute>
}

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

/**
 * Pilha de navegação padrão
 */
export const Stack = createStackNavigator();

/**
 * Base da interface com implementação de rotas
 */
const AppRouter = ({ currentTheme, themeHandler, routes = DEFAULT_ROUTES }: Props) => {
  return (
    <NavigationContainer
      ref={navigationRef}
      fallback={<LoadingFeedback minimal />}
    >
      {/*<OrderFormProvider>*/}
      {/*<AppRouter routes={defaultAppRoutes} currentTheme={currentTheme} themeHandler={themeHandler} />*/}
      <Stack.Navigator
        screenOptions={{
          headerTitle: () => <HeaderComponent />,
          headerLeftContainerStyle: { width: 0 },
          cardStyle: { backgroundColor: currentTheme.colors.background.primary }
        }}
        defaultInitialParams={{
          changeTheme: targetTheme => themeHandler(targetTheme),
        }}
      >
        { routes.map((route, index) => {
          // validações de rota ?
          return (
            <Stack.Screen
              key={index}
              name={route.name!}
              component={route.Component}
              options={route.options}
              initialParams={route.initialParams}
            />
          );
        })
      
        }
      </Stack.Navigator>
      {/*</OrderFormProvider>*/}
    </NavigationContainer>
  );
};

export default AppRouter;
