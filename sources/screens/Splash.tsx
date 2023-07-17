import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Splash = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Health Connect</Text>
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
        fontSize: 32,
    }
});

export default Splash;