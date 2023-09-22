import { Box, View } from "@gluestack-ui/themed";
import styled from 'styled-components/native';

export interface StyledProps {
  container?: boolean,
  spaced?: boolean,
  spacedTop?: boolean,
  spacedBottom?: boolean,
}

const SessionWrapper = styled(View)<StyledProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: ${({ theme, spaced, spacedTop, spacedBottom }) => {
    if (spaced) {
      return `${theme?.spacing.largest} 0`;
    } else if (spacedTop || spacedBottom) {
      return `${spacedTop ? theme?.spacing.largest : 0} 0 ${spacedBottom ? theme?.spacing.largest : 0}`;
    } else {
      return 0;
    }
  }};
`;

const SessionContainer = styled(Box)<StyledProps>`
  display: flex;
  width: 100%;
  max-width: ${({ theme, container }) => container ? theme?.screen.containerWidth : '100%'};
`;

const SessionContent = styled(Box)<StyledProps>`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;

export default {
  SessionWrapper,
  SessionContainer,
  SessionContent,
};

