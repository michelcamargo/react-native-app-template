import { CustomThemePaletteBuilder } from "../../../helpers/theme-helper";
import { CustomThemeColors } from "../../styled";

const colors: CustomThemeColors = {
  primary: "#116977",
  secondary: "#E2AE69",
  tertiary: "#3586b2",
  text: "#232323",
  error: "#e32523",
  success: "#22a103",
  warning: "#f6edcb",
  info: "#93dde8",
  light: "#FFFFFF",
  backgroundPrimary: "#FFFFFF",
  backgroundSecondary: "#797979",
};

export default CustomThemePaletteBuilder(colors);
