import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';

const Logout = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch({ type: "LOGOUT" });
    }

    return (
        <View>
            <Text>Logout</Text>
            <Button title="Logout" onPress={logout} />
        </View>
    )
}

export default Logout;