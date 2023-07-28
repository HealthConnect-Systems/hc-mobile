import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import SIZES from '../constants/Size';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getTheme } from '../components/common/Themed';

const Tab = createBottomTabNavigator()



function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color?: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const theme = getTheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: SIZES.height * 0.09

        },
        tabBarBackground() {
          return (
            <View
              style={{
                backgroundColor: theme.colors.surface,
                flex: 1,

              }}
            />
          );
        },
      }}
    >
      <Tabs.Screen
        name="home"

        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
        }}
      />
      <Tabs.Screen
        name="clinics"
        options={{
          title: 'Clinics',
          tabBarIcon: ({ color }) => <TabBarIcon name="hospital-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="pharmacies"
        options={{
          headerShown: false,

          title: 'Pharmacies',
          tabBarIcon: ({ color }) => <TabBarIcon name="shopping-bag" color={color} />,
        }}
      />
      <Tabs.Screen
        name="doctors"
        options={{
          title: 'Doctors',
          tabBarIcon: ({ color }) => <TabBarIcon name="user-md" color={color} />,
        }}
      />
    </Tabs>


  );
}
