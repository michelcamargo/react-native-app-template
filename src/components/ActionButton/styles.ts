import { Button, ButtonText, Text } from "@gluestack-ui/themed";
import styled from "styled-components/native";

interface Props {

}

const ButtonWrapper = styled(Button)<Props>`
  background: ${({ theme }) => theme?.colors.primary[500]};
`;
const ButtonTextContainer = styled(ButtonText)<Props>``;
const ButtonTextContent = styled(Text)<Props>``;

export default {
  ButtonWrapper,
  ButtonTextContainer,
  ButtonTextContent,
};
