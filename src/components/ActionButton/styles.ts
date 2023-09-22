import { Button, ButtonText, Text } from "@gluestack-ui/themed";
// import { Text } from "react-native";
import styled from "styled-components/native";

import { isBackgroundColorDark, lumiance } from "../../helpers/color-helper";

export interface StyledProps {
  outlined?: boolean,
  textColor?: string,
  bgColor?: string,
  highlighted?: boolean,
  bold?: boolean,
  stretched?: boolean,
}

const ButtonWrapper = styled(Button)<StyledProps>`
  position: relative;
  display: flex;
  background: ${({ theme, bgColor, outlined }) => {
    if (outlined) return 'transparent';
    if (bgColor) return bgColor;
    
    return theme?.colors.primary[500];
  }};
  
  border: ${({ theme, bgColor, textColor, outlined }) => {
    if (!outlined) return 'none';
    
    return `solid ${bgColor ?? textColor ?? theme.colors.primary[500]} ${theme?.outline.medium}`;
  }};
  
  height: auto;
  width: ${({ stretched }) => stretched ? '100%' : '' };
`;

const ButtonTextContainer = styled(ButtonText)<StyledProps>`
  position: relative;
  display: flex;
  padding-top: ${({ theme }) => theme?.spacing.medium};
  padding-bottom: ${({ theme }) => theme?.spacing.medium};
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ButtonTextContent = styled(Text)<StyledProps>`
  color: ${({ theme, textColor, bgColor, outlined }) => {
    if (textColor) return textColor;
    if (outlined) return bgColor ?? theme.colors.primary[500];
    
    return isBackgroundColorDark(bgColor ?? theme.colors.primary[500])
      ? lumiance(theme.colors.background.primary, 0) : theme.colors.text[500];
  }};

  position: relative;
  font-size: ${({ theme }) => theme?.typography.size.large};
  font-weight: ${({ highlighted, bold }) => (highlighted || bold ) ? 'bold' : 'normal'};
  
  height: auto;
  display: flex;
`;

export default {
  ButtonWrapper,
  ButtonTextContainer,
  ButtonTextContent,
};
