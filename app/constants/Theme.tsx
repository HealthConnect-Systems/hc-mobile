import { MD3LightTheme } from 'react-native-paper';

const customColors = {
    ...MD3LightTheme.colors,
    primary: '#4caf50',
    primaryText: '#333333',
    primaryBackground: '#ffffff',
    secondary: '#689f38',
    secondaryText: '#ffffff',
    secondaryBackground: '#f5f5f5',
    tertiary: '#a1b2c3',
}

const customFonts = {
    regular: {
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'normal' as 'normal',
    },
    medium: {
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold' as 'bold',
    },
    light: {
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'lighter' as 'lighter',
    },
    thin: {
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'lighter' as 'lighter',
    },
}

const iosFonts = {
    regular: {
        fontFamily: 'System',
        fontWeight: '400' as '400',
    },
    medium: {
        fontFamily: 'System',
        fontWeight: '500' as '500',
    },
    light: {
        fontFamily: 'System',
        fontWeight: '300' as '300',
    },
    thin: {
        fontFamily: 'System',
        fontWeight: '100' as '100',
    },
}

export const Theme = {
    ...MD3LightTheme,
    roundness: 2,
    colors: {
        ...MD3LightTheme.colors,
        ...customColors
    },
    fonts: {
        ...MD3LightTheme.fonts,
        ...customFonts,
        ios: iosFonts
    },
    button: {
        backgroundColor: customColors.primary,
        color: customColors.primaryText,
        border: 'none',
        borderRadius: 2,
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: 16,
        cursor: 'pointer',
        transitionDuration: '0.3s'
    },
    buttonHover: {
        backgroundColor: '#388e3c',
        color: '#ffffff'
    },
    card: {
        backgroundColor: customColors.primaryBackground,
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        padding: 20,
        marginBottom: 20
    },
    cardHover: {
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
    },
    navbar: {
        backgroundColor: customColors.secondary,
        color: customColors.secondaryText,
        padding: 10
    },
    navbarLink: {
        color: customColors.secondaryText,
        textDecoration: 'none'
    },
    navbarLinkHover: {
        color: '#cccccc'
    }
};

