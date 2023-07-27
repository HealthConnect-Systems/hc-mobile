import { MD3LightTheme } from 'react-native-paper';
import Fonts, { IOSFonts} from './Fonts';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const Colors = {
    ...MD3LightTheme.colors,
    primary: '#4caf50',
    primaryText: '#333333',
    primaryBackground: '#ffffff',
    secondary: '#689f38',
    secondaryText: '#ffffff',
    secondaryBackground: '#f5f5f5',
    tertiary: '#a1b2c3',
}


export default {
    ...MD3LightTheme,
    roundness: 2,
    colors: {
        ...MD3LightTheme.colors,
        ...Colors
    },
    fonts: {
        ...MD3LightTheme.fonts,
        ...Fonts,
        ios: IOSFonts
    },
    
};
export const SIZES = {
    h1: 22,
    h2: 20,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,

    width,
    height,
};