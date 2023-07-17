import { I18nextProvider } from 'react-i18next';
import i18n from './sources/i18n/config';
import SideMenu from './sources/screens/side_menu';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <SideMenu />
      </View>
    </I18nextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
