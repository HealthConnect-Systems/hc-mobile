import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
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
});

export default Styles;