import DEFAULT_ROUTES from '../../routes.tsx';
import { Stack } from '../Navigation';
import {AppRoute} from "../../lib/router";

interface Props {
  routes?: Array<AppRoute>
}

const AppRouter = ({ routes = DEFAULT_ROUTES }: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerStyle: styles.commonStackHeader,
        // headerTitle: () => <HeaderComponent />,
        headerLeftContainerStyle: {width: 0},
        // cardStyle: {backgroundColor: Colors.backgroundPrimary}
      }}
      defaultScreenOptions={{
        headerLeftContainerStyle: { width: 0 }
      }}
    >
      { routes.map((route, index) => {
        // validações de rota
        return (
          <Stack.Screen
            name={route.name!}
            component={route.Component}
            options={route.options}
            initialParams={route.initialParams}
          />
        )
      })
      
      }
    </Stack.Navigator>
  );
};

export default AppRouter;
