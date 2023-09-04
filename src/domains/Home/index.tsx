import React from 'react';

import { Button } from "@gluestack-ui/themed";
import { View, Text } from "react-native";

// import { AuthStepsEnum } from "../../lib/auth";
import { ScreenWrapper } from './styles';

interface Props {
  route: any,
  navigation: any,
}

const HomeScreen = ({ route, navigation }: Props) => {
  const changeTheme = keyName => {
    const { params } = route;
    
    if (params?.changeTheme) {
      params.changeTheme(keyName);
    }
  };
  
  return (
    <ScreenWrapper>
      <Text>Tela inicial</Text>
      <Button onPress={() => changeTheme('dark')}>
        <Text>
          Tema escuro
        </Text>
      </Button>
  
      <Button onPress={() => changeTheme('light')}>
        <Text>
          Tema claro
        </Text>
      </Button>
    </ScreenWrapper>
  );
};

export default HomeScreen;
