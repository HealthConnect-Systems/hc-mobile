import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import Theme from '../constants/Theme';
import { View } from 'react-native';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color?: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Theme.colors.primaryContainer,
        tabBarBackground() {
          return (
            <View
              style={{
                backgroundColor: Theme.colors.shadow,
                flex: 1,
              }}
            />
          );
        },
      }}>
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
