import React from 'react';
import { View, Text, Button, StyleSheet, GestureResponderEvent  } from 'react-native';

const clinics = ()=> {
    function handleLogin(event: GestureResponderEvent): void {
        throw new Error('Function not implemented.');
    }

    function handleRegister(event: GestureResponderEvent): void {
        throw new Error('Function not implemented.');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to React Native</Text>
            <Button
                title="Login"
                onPress={handleLogin}
            />
            <Button
                title="Register"
                onPress={handleRegister}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default clinics;