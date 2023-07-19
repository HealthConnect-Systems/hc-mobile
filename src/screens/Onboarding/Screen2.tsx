import React from 'react';
import { View, Text,  StyleSheet  } from 'react-native';
import { Button } from 'react-native-paper';

const Screen2 = ()=> {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to HC Mobile 1</Text>
            <Button
                mode="contained"
                onPress={() => console.log('Pressed')}
            >
                Press me
            </Button>
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

export default Screen2;