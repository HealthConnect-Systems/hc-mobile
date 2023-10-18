import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        margin: 15
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 12,
        alignItems: 'center',
    },
    button: {
        maxWidth: 150,
        marginVertical: 10,
    },
    buttonCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    introImageStyle: {
        width: 200,
        height: 200,
    },
    introTextStyle: {
        fontSize: 18,
        textAlign: 'center',
        paddingVertical: 30,
    },
    introTitleStyle: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});

export default Styles;