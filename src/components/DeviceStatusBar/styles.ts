import { View } from "react-native";
import styled from "styled-components/native";

const StatusBarWrapper = styled(View)`
  background-color: ${({ theme }) => {
    console.log('primary >>', theme.colors.primary[50]);
    return theme?.colors.primary[50];
  }};
  height: 80px;
`;

export default {
  StatusBarWrapper,
};
