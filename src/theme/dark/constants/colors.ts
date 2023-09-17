import { lumiance, getColorThemeRange } from "../../../helpers/color-helper";

const primary = "#E2AE69";
const secondary = "#4D1A25";
const tertiary = "#4B1D26";
const error = "#e32523";
const success = "#22a103";
const warning = "#f6edcb";
const info = "#93dde8";
const light = "#FFFFFF";
const backgroundPrimary = "#030303";
const backgroundSecondary = "#797979";

export default {
  primary: getColorThemeRange(primary, true),
  secondary: getColorThemeRange(secondary, true),
  tertiary: getColorThemeRange(tertiary),
  error: getColorThemeRange(error),
  success: getColorThemeRange(success),
  warning: getColorThemeRange(warning),
  info: getColorThemeRange(info),
  light: getColorThemeRange(light),
  background: {
    primary: backgroundPrimary,
    primaryInverted: lumiance(backgroundPrimary, 2),
    secondary: backgroundSecondary,
    secondaryInverted: lumiance(backgroundPrimary, 0.1),
  },
};
