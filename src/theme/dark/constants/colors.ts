import { CustomThemePaletteBuilder } from "../../../helpers/theme-helper";
import { CustomThemeColors } from "../../styled";

const colors: CustomThemeColors = {
  primary: "#E2AE69",
  secondary: "#4D1A25",
  tertiary: "#4B1D26",
  text: "#232323",
  error: "#e32523",
  success: "#22a103",
  warning: "#f6edcb",
  info: "#93dde8",
  light: "#FFFFFF",
  backgroundPrimary: "#030303",
  backgroundSecondary: "#797979",
};

export default CustomThemePaletteBuilder(colors);
