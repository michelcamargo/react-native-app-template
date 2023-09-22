import { CustomTheme } from '../styled';
import Colors from './constants/colors';
import Outline from "./constants/outline";
import Radius from './constants/radius';
import Screen from './constants/screen';
import Shadow from "./constants/shadow";
import Spacing from './constants/spacing';
import Typography from './constants/typography';

const lightTheme: CustomTheme = {
  key: 'light',
  colors: Colors,
  typography: Typography,
  screen: Screen,
  spacing: Spacing,
  radius: Radius,
  outline: Outline,
  shadow: Shadow,
};

export default lightTheme;
