import { StyleSheet } from 'react-native';

import { Text, View } from '../components/common/Themed';
import Theme from '../constants/Theme';

export default function DoctorsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doctors</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.secondaryText
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Theme.colors.primary
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: Theme.colors.primary

  },
});
