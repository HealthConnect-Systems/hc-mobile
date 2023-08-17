import { Stack } from 'expo-router';
import { Title, View, Link } from './components/controls';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View>
        <Title>This screen doesn't exist.</Title>
        <Link href="/" >
          Go to home screen!
        </Link>
      </View>
    </>
  );
}
