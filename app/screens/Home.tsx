import React from 'react';
import { View } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';

const HomeScreen = () => {
    return (
        <View>
            <Text> Home Page</Text>
            <Button> Press me </Button>
            <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle" />
                <Card.Content>
                    <Text>Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
        </View>
    )
}

export default HomeScreen;