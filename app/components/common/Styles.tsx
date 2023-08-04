import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getTheme } from './Themed';

const theme = getTheme();
const insets = useSafeAreaInsets();

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.left,
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, 255)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Styles;