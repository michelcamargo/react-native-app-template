import React from 'react';

import { Button } from "@gluestack-ui/themed";
import { View, Text } from "react-native";

// import { AuthStepsEnum } from "../../lib/auth";
import ActionButton from "../../components/ActionButton";
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
      <ActionButton onPress={() => changeTheme('dark')}>
        Tema escuro
      </ActionButton>
  
      <ActionButton onPress={() => changeTheme('light')}>
        Tema claro
      </ActionButton>
    </ScreenWrapper>
  );
};

export default HomeScreen;
