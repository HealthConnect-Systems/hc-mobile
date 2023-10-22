import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { PaperProvider } from 'react-native-paper';
import Themed from './components/common/Themed';
import Onboarding from './screens/Onboarding';

function RootLayout() {
  const theme = useColorScheme() === 'dark' ? Themed.dark : Themed.light;
  return (
    <>
      <PaperProvider theme={theme}>
        <Stack>
          <Stack.Screen name="screens" options={{ headerShown: false }} />
        </Stack>
      </PaperProvider>
    </>
  );
}

export default () => {
  const [firstLaunch, setFirstLaunch] = React.useState(false);

  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    async function setData() {
      const appData = await AsyncStorage.getItem("appLaunched");
      if (appData == null) {
        setFirstLaunch(true);
        AsyncStorage.setItem("appLaunched", "false");
      } else {
        setFirstLaunch(false);
      }
    }
    setData();
  }, []);

  if (!loaded) {
    return (<SplashScreen />);
  }
  if (firstLaunch) {
    return (< Onboarding onDone={() => setFirstLaunch(false)} />)
  }
  return (< Onboarding onDone={() => setFirstLaunch(false)} />)
  // return (<RootLayout />);
}
