import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();

    const login = () => {
        dispatch({ type: "LOGIN", payload: { name: "John Doe" } });
    }

    return (
        <View>
            <Text>Login</Text>
            <Button title="Login" onPress={login} />
        </View>
    )
}

export default Login;