import { StyleSheet } from 'react-native';
import Colors from "./Colors"

export default StyleSheet.create({
    primaryButton: {
        backgroundColor: Colors.primary,
        color: Colors.primaryText,
        borderRadius: 2,
        padding: '15px',
        textAlign: 'center',
        display: 'flex',
        fontSize: 16
    },
    buttonHover: {
        backgroundColor: '#388e3c',
        color: '#ffffff'
    },
    card: {
        backgroundColor: Colors.primaryBackground,
        padding: 20,
        marginBottom: 20
    },
    navbar: {
        backgroundColor: Colors.secondary,
        color: Colors.secondaryText,
        padding: 10
    },
    navbarLink: {
        color: Colors.secondaryText,
    },
    navbarLinkHover: {
        color: '#cccccc'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    contianer: {
        flex: 1,
        justifyContent: 'center',
    }
});