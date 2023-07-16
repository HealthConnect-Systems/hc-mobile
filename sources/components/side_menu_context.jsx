import React from 'react';
import { View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Drawer } from 'react-native-paper';

const SideMenuContent = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://avatars.githubusercontent.com/u/263385',
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        {/* <Drawer.Item icon="home" label="Home" onPress={() => props.navigation.navigate('home')} />
                        <Drawer.Item icon="bookmark" label="Clinics" onPress={() => props.navigation.navigate('clinics')} />
                        <Drawer.Item icon="settigs" label="Settings" onPress={() => props.navigation.navigate('settings')} /> */}
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    label="Sign Out"
                    onPress={() => { }}
                />
            </Drawer.Section>
        </View>
    );
}

export default SideMenuContent;

