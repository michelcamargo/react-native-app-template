import { Box } from "@gluestack-ui/themed";
import { StyleSheet } from 'react-native';
import styled from "styled-components/native";

export const getHeaderNativeStyles = currentTheme => StyleSheet.create({
  commonTabHeaderBgContainer: {
    // posterior ao cabeçalho
  },
  commonTabHeaderTitleContainer: {
    width: '100%',
  },
  commonTabHeader: {
    // height: 70,
    // width: '100%',
    // backgroundColor: currentTheme.colors.actionPrimary,
    backgroundColor: currentTheme?.colors.background.secondary,
    borderBottomLeftRadius: currentTheme.radius.large,
    borderBottomRightRadius: currentTheme.radius.large,
    elevation: 8,
  },
  commonStackHeader: {
    // height: 90,
    elevation: 8
  },
  cleanStackHeader: {
    height: 70,
    // backgroundColor: currentTheme.colors.background.primary,
    elevation: 8
  },
});

export interface StyledProps {

}

const HeaderWrapper = styled(Box)<StyledProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderContainer = styled(Box)<StyledProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeaderTopContent = styled(Box)<StyledProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const HeaderTopLeft = styled(Box)<StyledProps>`
  display: flex;
  flex-direction: column;
`;

const HeaderTopLeft_Back = styled(Box)<StyledProps>`
  display: flex;
  flex-direction: column;
  flex: .3;
`;

const HeaderTopRight = styled(Box)<StyledProps>`
  display: flex;
  justify-content: flex-end;
`;

const HeaderMidContent = styled(Box)<StyledProps>``;
const HeaderMidLeft = styled(Box)<StyledProps>``;
const HeaderMidRight = styled(Box)<StyledProps>``;

const HeaderBottomContent = styled(Box)<StyledProps>``;
const HeaderBottomLeft = styled(Box)<StyledProps>``;
const HeaderBottomRight = styled(Box)<StyledProps>``;

export default {
  HeaderWrapper,
  HeaderContainer,
  HeaderTopContent,
  HeaderTopLeft,
  HeaderTopLeft_Back,
  HeaderTopRight,
  HeaderMidContent,
  HeaderMidLeft,
  HeaderMidRight,
  HeaderBottomContent,
  HeaderBottomLeft,
  HeaderBottomRight,
};

