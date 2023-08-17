import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import Fonts, { IOSFonts } from '../../constants/Fonts';

const Theme = {
  ...MD3LightTheme,
  colors: {
    primary: 'rgb(0, 107, 94)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(118, 248, 226)',
    onPrimaryContainer: 'rgb(0, 32, 27)',
    secondary: 'rgb(56, 107, 1)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(183, 244, 129)',
    onSecondaryContainer: 'rgb(13, 32, 0)',
    tertiary: 'rgb(0, 103, 131)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(188, 233, 255)',
    onTertiaryContainer: 'rgb(0, 31, 42)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(250, 253, 251)',
    onBackground: 'rgb(25, 28, 27)',
    surface: 'rgb(250, 253, 251)',
    onSurface: 'rgb(25, 28, 27)',
    surfaceVariant: 'rgb(218, 229, 225)',
    onSurfaceVariant: 'rgb(63, 73, 70)',
    outline: 'rgb(111, 121, 118)',
    outlineVariant: 'rgb(190, 201, 197)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(45, 49, 48)',
    inverseOnSurface: 'rgb(239, 241, 239)',
    inversePrimary: 'rgb(85, 219, 198)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(238, 246, 243)',
      level2: 'rgb(230, 241, 238)',
      level3: 'rgb(223, 237, 234)',
      level4: 'rgb(220, 236, 232)',
      level5: 'rgb(215, 233, 229)'
    },
    surfaceDisabled: 'rgba(25, 28, 27, 0.12)',
    onSurfaceDisabled: 'rgba(25, 28, 27, 0.38)',
    backdrop: 'rgba(41, 50, 48, 0.4)'
  },
  fonts: {
    ...MD3LightTheme.fonts,
    ...Fonts,
    ios: IOSFonts
  },
}

const DarkTheme = {
  ...MD3DarkTheme,
  colors: {
    primary: 'rgb(85, 219, 198)',
    onPrimary: 'rgb(0, 55, 48)',
    primaryContainer: 'rgb(0, 80, 71)',
    onPrimaryContainer: 'rgb(118, 248, 226)',
    secondary: 'rgb(156, 215, 105)',
    onSecondary: 'rgb(26, 55, 0)',
    secondaryContainer: 'rgb(40, 80, 0)',
    onSecondaryContainer: 'rgb(183, 244, 129)',
    tertiary: 'rgb(99, 211, 255)',
    onTertiary: 'rgb(0, 53, 69)',
    tertiaryContainer: 'rgb(0, 77, 99)',
    onTertiaryContainer: 'rgb(188, 233, 255)',
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: 'rgb(25, 28, 27)',
    onBackground: 'rgb(224, 227, 225)',
    surface: 'rgb(25, 28, 27)',
    onSurface: 'rgb(224, 227, 225)',
    surfaceVariant: 'rgb(63, 73, 70)',
    onSurfaceVariant: 'rgb(190, 201, 197)',
    outline: 'rgb(137, 147, 144)',
    outlineVariant: 'rgb(63, 73, 70)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(224, 227, 225)',
    inverseOnSurface: 'rgb(45, 49, 48)',
    inversePrimary: 'rgb(0, 107, 94)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(28, 38, 36)',
      level2: 'rgb(30, 43, 41)',
      level3: 'rgb(32, 49, 46)',
      level4: 'rgb(32, 51, 48)',
      level5: 'rgb(33, 55, 51)'
    },
    surfaceDisabled: 'rgba(224, 227, 225, 0.12)',
    onSurfaceDisabled: 'rgba(224, 227, 225, 0.38)',
    backdrop: 'rgba(41, 50, 48, 0.4)'
  },
  fonts: {
    ...MD3DarkTheme.fonts,
    ...Fonts,
    ios: IOSFonts
  },
}

export default {
  light: Theme,
  dark: DarkTheme
}
