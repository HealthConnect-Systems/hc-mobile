import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const groups = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forum Groups</Text>
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

export default groups;