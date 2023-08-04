import { useColorScheme } from 'react-native';
import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import Fonts, { IOSFonts } from '../../constants/Fonts';

const Theme = {
  ...MD3LightTheme,
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#4CAF50',
    secondary: '#C5E1A5',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    error: '#B00020',
    onPrimary: '#FFFFFF',
    onSecondary: '#000000',
    onBackground: '#000000',
    onSurface: '#000000',
    onError: '#FFFFFF',
    
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
    primary: '#006400',
    secondary: '#003300',
    background: '#000000',
    surface: '#000000',
    onPrimary: '#FFFFFF',
    onSecondary: '#FFFFFF'
  
  }, fonts: {
    ...MD3DarkTheme.fonts,
    ...Fonts,
    ios: IOSFonts
  },
}


export default {
  light: Theme,
  dark: DarkTheme
};

export const getTheme = () => {
  const theme = useColorScheme();
  if (theme === 'dark') {
    return DarkTheme;
  }
  return Theme;
}