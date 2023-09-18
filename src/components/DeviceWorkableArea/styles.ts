import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

const WorkableAreaWrapper = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }) => theme?.colors.background.primary};
`;

export default {
  WorkableAreaWrapper,
};
