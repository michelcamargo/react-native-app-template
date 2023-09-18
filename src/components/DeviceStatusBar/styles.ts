import Constants from "expo-constants";
import { View } from "react-native";
import styled from "styled-components/native";

interface Props {
  height: number
}

const StatusBarWrapper = styled(View)<Props>`
  background-color: ${({ theme }) => theme?.colors.primary[50]};
  height: ${Constants.statusBarHeight}px;
`;

export default {
  StatusBarWrapper,
};
