import React from 'react';

import { Platform, StatusBar } from "react-native";
import { useTheme } from "styled-components/native";

import Styled from './styles';

const Index = () => {
  const currentTheme = useTheme();
  
  return (
    <Styled.StatusBarWrapper>
      <StatusBar
        backgroundColor={currentTheme.colors.primary[1]}
        barStyle={Platform.OS == "ios" ? "light-content" : "default"}
        translucent
      />
    </Styled.StatusBarWrapper>
  );
};

export default Index;
