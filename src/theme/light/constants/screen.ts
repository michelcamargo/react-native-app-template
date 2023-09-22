import { Dimensions } from "react-native";

export const nativeWidth = Dimensions.get('screen').width;
export const nativeHeight = Dimensions.get('screen').height;

export default {
  width: `${nativeWidth}px`,
  height: `${nativeHeight}px`,
  containerWidth: '97%',
};
