import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { PaperProvider } from 'react-native-paper';
import { getTheme } from './components/common/Themed';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import Onboarding from './components/onboarding';
export {
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)'
}

// const Onboarding = () => {
//   const [firstLaunch, setFirstLaunch] = React.useState(false);

//   React.useEffect(() => {
//     async function setData() {
//       const appData = await AsyncStorage.getItem("appLaunched");
//       if (appData == null) {
//         setFirstLaunch(true);
//         AsyncStorage.setItem("appLaunched", "false");
//       } else {
//         setFirstLaunch(false);
//       }
//     }
//     setData();
//   }, []);

//   return (
//     <Stack.Screen
//       options={{ headerShown: false }}
//       name="onboarding"
//     />
//   );
// }

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
      {/* {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />} */}
      {< Onboarding />}
    </>
  );
}

function RootLayoutNav() {
  const theme = getTheme();
  return (
    <>
      <PaperProvider theme={theme}>
        <Stack>
          {/* <Onboarding /> */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </PaperProvider>
    </>
  );
}
