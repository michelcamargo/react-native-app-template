import {Dimensions, StyleSheet} from 'react-native';

export const Typography = {
  familyHeading: 'Colus-Regular',
  familyBody: 'Urbanist-Regular',
  familyBody__light: 'Urbanist-Light',
  familyBody__bold: 'Urbanist-Bold',
  sizeSmallest: 12,
  sizeSmaller: 13,
  sizeSmall: 14,
  sizeMedium: 16,
  sizeSemiLarge: 18,
  sizeLarge: 24,
  sizeLarger: 28,
  sizeLargest: 32,
  weightLight: 300,
  weightNormal: 400,
  weightSemiBold: 600,
  weightBold: 700,
  lineHeightSmall: 1.2,
  lineHeightMedium: 1.4,
  lineHeightLarge: 1.6
}

export const Colors = {
  monoWhite: "#FFFFFF",
  monoBlack: "#000000",
  monoLightGray: "#efefef",
  monoGray: "#c7c7c7",
  monoDarkGray: "#727272",
  backgroundPrimary: "#FFFFFF",
  backgroundSecondary: "#F8F8F8",
  backgroundAccent: "#F8E8D3",
  textPrimaryDark: "#050505",
  textPrimaryLight: "#F8F8F8",
  textSecondaryDark: "#4B1D26",
  textSecondaryLight: "#E2AE69",
  actionPrimary: "#A81A18",
  actionSecondary: "#4D1A25",
  actionAccent: "#E2AE69",
  anchor: "#408BF9",
  danger: "#e32523"
}

export const Screen = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
  containerWidth: '95%'
}

export const Spacing = {
  smallest: 4,
  smaller: 6,
  small: 8,
  semiSmall: 10,
  medium: 12,
  semiLarge: 14,
  large: 16,
  larger: 20,
  extraLarge: 24,
  largest: 42,
}

export const Radius = {
  smallest: 4,
  small: 6,
  medium: 8,
  large: 12,
  largest: 20,
  rounded: 400
}

export default StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '95%',
    height: 'auto',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  bodyText: {
    fontFamily: Typography.familyBody
  },
  headingText: {
    fontFamily: Typography.familyHeading
  }
})