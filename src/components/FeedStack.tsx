import React from 'react';
import Header from '../components/Header';
import Doctors from '../screens/Doctors/Search';
import Clinics from '../screens/Clinics';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const FeedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props: any) => (
          <Header {...props} />
        ),
      }}
    >
      <Stack.Screen
        name="Doctors"
        component={Doctors}
        options={{ headerTitle: 'Doctors' }}
      />
      <Stack.Screen
        name="Clinics"
        component={Clinics}
        options={{ headerTitle: 'Clinics' }}
      />
    </Stack.Navigator>
  );
};

export default FeedStack;