import React from 'react';
import { View, Text, Button } from '../components/controls';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();

    const login = () => {
        dispatch({ type: "LOGIN", payload: { name: "John Doe" } });
    }

    return (
        <View>
            <Text>Login</Text>
            <Button onPress={login} > Login </Button>
        </View>
    )
}

export default Login;