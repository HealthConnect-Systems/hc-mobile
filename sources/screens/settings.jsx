import React from 'react';
import { View, Text, Button, StyleSheet  } from 'react-native';

const settings = ()=> {
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