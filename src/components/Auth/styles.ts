import { Box, Text } from "@gluestack-ui/themed";
import styled from "styled-components/native";

const AuthContainer = styled(Box)`

`;

const AuthHeroContainer = styled(Box)`

`;

const AuthActionsContainer = styled(Box)`

`;

const HeroBrandLogo = styled(Text)`
  font-size: ${({ theme }) => theme?.typography.size.larger};
`;

const AuthMainOptionLabel = styled(Text)`

`;

const AuthOptionLabel = styled(Text)`

`;

export default {
  AuthContainer,
  AuthHeroContainer,
  HeroBrandLogo,
  AuthMainOptionLabel,
  AuthOptionLabel,
  AuthActionsContainer
};
