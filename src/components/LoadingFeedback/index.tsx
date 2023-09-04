import React from 'react';

import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";

import Styled from './styles';

interface Props {
  minimal?: boolean,
  title?: string,
  description?: string,
}

const LoadingFeedback = ({ minimal, title, description }: Props) => {
  const currentTheme = useTheme();
  
  if (minimal) {
    return (
      <ActivityIndicator color={currentTheme.colors.actionPrimary} />
    );
  }
  
  return (
    <Styled.LoadingWrapper>
      <Styled.AnimatedIcon />
      <Styled.LoadingTitle>{title}</Styled.LoadingTitle>
      <Styled.LoadingDescription>{description}</Styled.LoadingDescription>
    </Styled.LoadingWrapper>
  );
};

export default LoadingFeedback;
