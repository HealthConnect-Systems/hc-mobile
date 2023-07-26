import FontAwesome from '@expo/vector-icons/FontAwesome';
import {  PaperProvider } from 'react-native-paper';
import Theme from './constants/Theme';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}
 
function RootLayoutNav() {
  return (
    <>
      <PaperProvider theme={Theme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> 
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
      </PaperProvider>
    </>
  );
}