import { Text } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';

export default () => {
  const router = useRouter();

  useFocusEffect(() => {
    router.replace('/screens');
  });

  return <Text>Health Connect Application</Text>;
}