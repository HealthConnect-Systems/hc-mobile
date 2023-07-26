import { MD3LightTheme } from 'react-native-paper';
import Fonts, { IOSFonts} from './Fonts';

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
