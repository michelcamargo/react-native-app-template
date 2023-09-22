import React from 'react';

import { View, Text } from "react-native";

// import { AuthStepsEnum } from "../../lib/auth";
import ActionButton from "../../components/ActionButton";
import ScreenSession from "../../components/ScreenSession";
import Styled from './styles';

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
    <Styled.ScreenWrapper container>
      <ScreenSession container spacedBottom>
        <Text>Tela inicial</Text>
        <ActionButton onPress={() => changeTheme('dark')}>
          Tema escuro
        </ActionButton>
      </ScreenSession>
      <ScreenSession spaced>
        <ActionButton onPress={() => changeTheme('light')}>
          Tema claro
        </ActionButton>
      </ScreenSession>
    </Styled.ScreenWrapper>
  );
};

export default HomeScreen;
