import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Drawer, Provider as PaperProvider } from 'react-native-paper';
import SideMenuConent from '../components/side_menu_context';
import { Settings } from 'react-native';

const SideMenu = () => {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Drawer.Navigator drawerContent={props => <SideMenuConent {...props} />}>
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Profile" component={Profile} />
                    <Drawer.Screen name="Settings" component={Settings} />
                </Drawer.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

export default SideMenu;
