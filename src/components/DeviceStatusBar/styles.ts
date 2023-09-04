import { View } from "react-native";
import styled from "styled-components/native";

const StatusBarWrapper = styled(View)`
  background: ${({ theme }) => theme?.colors.actionPrimary};
  height: 80px;
`;

export default {
  StatusBarWrapper,
};
