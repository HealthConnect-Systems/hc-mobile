import { StatusBar, useColorScheme } from 'react-native';
import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import Fonts, { IOSFonts } from '../../constants/Fonts';

const Theme = {
  ...MD3LightTheme,
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: 'green'
  },
  fonts: {
    ...MD3LightTheme.fonts,
    ...Fonts,
    ios: IOSFonts
  },
}

const DarkTheme = {
  ...Theme,
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: 'yellow'

  }
}


export default {
  light: Theme,
  dark: DarkTheme
};

export const getTheme = () => {
  const theme = useColorScheme();
  if (theme === 'dark') {
    StatusBar.setBarStyle('light-content', true);
    StatusBar.setBackgroundColor(DarkTheme.colors.primary);
    return DarkTheme;
  }
  

  StatusBar.setBarStyle('dark-content', false);
  StatusBar.setBackgroundColor(Theme.colors.primary);

  return Theme;
}