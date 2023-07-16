import React from 'react';
import { View, Text, Button, StyleSheet  } from 'react-native';

const Main = ({navigation}) => {
    const handleLogin = () => {
        navigation.navigate('Login');
    }

    const handleRegister = () => {
        navigation.navigate('Register');
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

export default Main;