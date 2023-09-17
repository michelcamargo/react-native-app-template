import { StyleSheet } from 'react-native';

export const getHeaderNativeStyles = currentTheme => StyleSheet.create({
  commonTabHeader: {
    height: 70,
    width: '100%',
    // backgroundColor: currentTheme.colors.actionPrimary,
    borderBottomLeftRadius: currentTheme.radius.large,
    borderBottomRightRadius: currentTheme.radius.large,
    elevation: 8,
  },
  commonStackHeader: {
    height: 90,
    backgroundColor: currentTheme.colors.background.primary,
    elevation: 8
  },
  cleanStackHeader: {
    height: 70,
    backgroundColor: currentTheme.colors.background.primary,
    elevation: 8
  },
});

