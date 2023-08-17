import React, { useState } from 'react';
import { View } from 'react-native';
import { Card, Button, Text, Portal, Modal } from '../components/controls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './Login';


const HomeScreen = () => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return (
        <>
            <LoginScreen visible={visible} onLogin={(user) => {
                console.log(user);
                hideModal();
            }} onCanceled={hideModal} />

            <View>
                <Text> Home Page</Text>
                <Button onPress={() => {
                    AsyncStorage.clear();
                }}> Clear cache </Button>

                <Button onPress={showModal}> Login </Button>
            </View>
        </>
    )
}

export default HomeScreen;