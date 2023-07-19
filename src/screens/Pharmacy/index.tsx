import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const shops = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pharmacies</Text>
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

export default shops;