import { StyleSheet } from 'react-native';
import Styles from '../constants/Styles'
import dics from '../localization';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import HomeScreen from '../screens/Home';

export default function home() {
  return (
    <View style={Styles.contianer}>
      <Text style={Styles.title}>{dics.welcome}</Text>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({

});
