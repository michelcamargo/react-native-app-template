import { Box } from "@gluestack-ui/themed";
import { StyleSheet } from 'react-native';
import styled from "styled-components/native";

const HeaderWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeaderTopContent = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const HeaderTopLeft = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const HeaderTopLeft_Back = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: .3;
`;

const HeaderTopRight = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

const HeaderMidContent = styled(Box)``;
const HeaderMidLeft = styled(Box)``;
const HeaderMidRight = styled(Box)``;

const HeaderBottomContent = styled(Box)``;
const HeaderBottomLeft = styled(Box)``;
const HeaderBottomRight = styled(Box)``;

export const getHeaderNativeStyles = currentTheme => StyleSheet.create({
  commonTabHeader: {
    // height: 70,
    // width: '100%',
    // backgroundColor: currentTheme.colors.actionPrimary,
    borderBottomLeftRadius: currentTheme.radius.large,
    borderBottomRightRadius: currentTheme.radius.large,
    elevation: 8,
    backgroundColor: 'green',
  },
  commonStackHeader: {
    // height: 90,
    backgroundColor: 'blue',
    elevation: 8
  },
  cleanStackHeader: {
    height: 70,
    // backgroundColor: currentTheme.colors.background.primary,
    backgroundColor: 'red',
    elevation: 8
  },
});

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

