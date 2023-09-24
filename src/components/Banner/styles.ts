import { View, Text } from "@gluestack-ui/themed";
import { TouchableOpacity, Image as NativeImage } from "react-native";
import styled from "styled-components/native";

export interface StyledProps {
  width?: string,
  height?: string,
  onPress?: () => void
}

const Wrapper = styled(View)<StyledProps>`
  width: ${props => props.width ? props.width : '51px'};
  height: ${props => props.height ? props.height : '49px'};
`;

const Touchable = styled(TouchableOpacity)<StyledProps>`
  width: ${props => props.width ? props.width : '51px'};
  height: ${props => props.height ? props.height : '49px'};
`;

const Image = styled(NativeImage)<StyledProps>`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
`;

const Placeholder = styled(Text)<StyledProps>`
  display: flex;
  position: relative;
`;

export default {
  Wrapper,
  Touchable,
  Image,
  Placeholder,
};
