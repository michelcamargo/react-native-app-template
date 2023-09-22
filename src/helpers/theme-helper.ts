import { CustomThemeColors, CustomThemePalette } from "../theme/styled";
import { getColorThemeRange, lumiance } from "./color-helper";

export const CustomThemePaletteBuilder = (colors: CustomThemeColors): CustomThemePalette => {
  return {
    primary: getColorThemeRange(colors.primary, true),
    secondary: getColorThemeRange(colors.secondary, true),
    tertiary: getColorThemeRange(colors.tertiary),
    text: getColorThemeRange(colors.text),
    error: getColorThemeRange(colors.error),
    success: getColorThemeRange(colors.success),
    warning: getColorThemeRange(colors.warning),
    info: getColorThemeRange(colors.info),
    light: getColorThemeRange(colors.light),
    background: {
      primary: colors.backgroundPrimary,
      primaryInverted: lumiance(colors.backgroundPrimary, 1),
      secondary: colors.backgroundSecondary,
      secondaryInverted: lumiance(colors.backgroundPrimary, 0.1),
    },
  };
};

