import { Box, Text } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface Props {}

const BackButtonWrapper = styled(TouchableOpacity)<Props>`

`;
const BackButtonContainer = styled(Box)<Props>`

`;
const BackButtonLabel = styled(Text)<Props>`

`;

export default {
  BackButtonWrapper,
  BackButtonContainer,
  BackButtonLabel
};
