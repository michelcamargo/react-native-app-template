import {Dimensions, StyleSheet} from 'react-native';

export const Typography = {
  familyHeading: 'Colus-Regular',
  familyBody: 'Urbanist-Regular',
  familyBody__light: 'Urbanist-Light',
  familyBody__bold: 'Urbanist-Bold',
  sizeSmallest: '12px',
  sizeSmaller: '13px',
  sizeSmall: '14px',
  sizeMedium: '16px',
  sizeSemiLarge: '18px',
  sizeLarge: '22px',
  sizeLarger: '26px',
  sizeLargest: '30px',
  lineHeightSmall: 1.2,
  lineHeightMedium: 1.4,
  lineHeightLarge: 1.6
}

export const Colors = {
  monoWhite: "#FFFFFF",
  monoBlack: "#000000",
  monoLightGray: "#efefef",
  monoGray: "#c7c7c7",
  monoSemiDarkGray: "#8c8c8c",
  monoDarkGray: "#727272",
  backgroundPrimary: "#FFFFFF",
  backgroundSecondary: "#F8F8F8",
  backgroundAccent: "#F8E8D3",
  backgroundWarning: "#f6edcb",
  backgroundDanger: "#f3b0b0",
  textPrimaryDark: "#050505",
  textPrimaryLight: "#F8F8F8",
  textSecondaryDark: "#4B1D26",
  textSecondaryLight: "#E2AE69",
  actionPrimary: "#A81A18",
  actionSecondary: "#4D1A25",
  actionAccent: "#E2AE69",
  success: "#22a103",
  anchor: "#408BF9",
  danger: "#e32523",
  warning: "#f6edcb"
}

export const Screen = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
  containerWidth: '95%'
}

export const Spacing = {
  smallest: '4px',
  smaller: '6px',
  small: '8px',
  semiSmall: '10px',
  medium: '12px',
  semiLarge: '14px',
  large: '16px',
  larger: '20px',
  extraLarge: '24px',
  largest: '42px',
}

export const Radius = {
  smallest: '4px',
  small: '6px',
  medium: '8px',
  large: '12px',
  largest: '20px',
  rounded: '400px'
}

export const Shadow = {
  box__light: '0 0 2px 1px rgba(0, 0, 0, .1)'
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