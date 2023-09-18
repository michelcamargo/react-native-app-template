import { Box, Text } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface Props {}

const InfoPanelButton = styled(TouchableOpacity)<Props>`
  display: flex;
  flex-direction: row;
`;
const SessionInfo = styled(Box)<Props>`
  display: flex;
  flex-direction: column;
`;

const CurrentUserName = styled(Text)<Props>`

`;

const LocationInfo = styled(Text)<Props>`
  font-size: ${({ theme }) => theme?.typography.size.smaller};
  font-weight: bold;
`;

export default {
  InfoPanelButton,
  SessionInfo,
  CurrentUserName,
  LocationInfo,
};
