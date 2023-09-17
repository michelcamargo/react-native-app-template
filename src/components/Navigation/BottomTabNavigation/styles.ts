import { StyleSheet } from 'react-native';

export const getBottomNavigationNativeStyles = currentTheme => StyleSheet.create({
  tabBar: {
    elevation: 10,
    shadowOpacity: .05,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    position: 'absolute',
    backgroundColor: currentTheme.colors.light[9],
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    width: '100%'
  },
  commonTabHeader: {
    height: 70,
    backgroundColor: currentTheme.colors.primary[5],
    borderBottomLeftRadius: currentTheme.radius.large,
    borderBottomRightRadius: currentTheme.radius.large
  },
  attentionBadge: {
    backgroundColor: currentTheme.colors.primary[5],
    fontFamily: currentTheme.typography.family.bodyBold,
    top: 8,
    transform: [{ scale: .85 }]
  }
});
