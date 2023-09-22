import { Box, View } from "@gluestack-ui/themed";
import styled from 'styled-components/native';

export interface StyledProps {
  container?: boolean,
}

const ScreenWrapper = styled(View)<StyledProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ScreenSession = styled(Box)<StyledProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: ${({ theme, container }) => container ? theme?.screen.containerWidth : '100%'};
`;

export default {
  ScreenWrapper,
  ScreenSession,
};
