import React from 'react';
import { View } from 'react-native';
import { Card, Button, Text } from '../components/controls';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = () => {
    return ( 
        <View>
            <Text> Home Page</Text>
            <Button onPress={() => {
                AsyncStorage.clear();
            }}> Clear cache </Button>
            <Card>
                {/* <Card.Title title="Home Scren" subtitle="Card Subtitle" />
                <Card.Content>
                    <Text>Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button> */}
                {/* </Card.Actions> */}
            </Card>
        </View>
    )
}

export default HomeScreen;