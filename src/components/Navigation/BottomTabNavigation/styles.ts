import { StyleSheet } from 'react-native';

import { getHeaderNativeStyles } from "../../HeaderComponent/styles";

export const getBottomNavigationNativeStyles = currentTheme => StyleSheet.create({
  ...getHeaderNativeStyles(currentTheme),
  tabBar: {
    elevation: 10,
    shadowOpacity: .05,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    position: 'absolute',
    // backgroundColor: currentTheme.colors.light[9],
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
  },
  attentionBadge: {
    backgroundColor: currentTheme.colors.primary[5],
    fontFamily: currentTheme.typography.family.bodyBold,
    top: 8,
    transform: [{ scale: .85 }]
  }
});
