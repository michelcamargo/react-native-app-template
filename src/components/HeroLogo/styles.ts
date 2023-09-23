import { Text } from "@gluestack-ui/themed";
import styled from "styled-components/native";

export interface StyledProps {

}

const HeroBrandLogo = styled(Text)<StyledProps>`
  font-weight: bold;
  font-size: ${({ theme }) => theme?.typography.size.largest};
`;

export default {
  HeroBrandLogo
};
