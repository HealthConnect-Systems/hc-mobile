import React, { useState } from "react";
import { View, ScrollViewBase, Title, Text, Image, Button } from '../components/controls';
const screens = [
    {
        title: 'Welcome to HealthConnect',
        description: 'We are here to help you find the best health care services in your area.',
        image: 'splash.png',
    },
    {
        title: 'Features',
        description: 'Access to the best health care services in your area.',
        image: `splash.png`,
    },
    {
        title: 'Get Started',
        description: 'Thank you for choosing HealthConnect.',
        image: `splash.png`
    }
]


type props = {
    key: number,
    title: string,
    description?: string,
    image: string,
    active?: boolean,
    handleNext?: () => void,
    handleSkip?: () => void
}

function Onboarding(props: props) {
    const { title, description, image, handleNext, handleSkip } = props;
    return (
        <View>
            <Title>{title}</Title>
            <Text>{description}</Text>
            <Image {...{ image }} />
            <Button onPress={handleNext}>Next</Button>
            <Button onPress={handleSkip}>Skip</Button>
        </View>
    )
}

export default ({ navigation }: any) => {
    const [activeScreen, setActiveScreen] = useState(0);

    const handleNext = () => {
        if (activeScreen < screens.length - 1) {
            setActiveScreen(activeScreen + 1);
        } else {
            navigation.navigate('Login');
        }
    }

    const handleSkip = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollViewBase
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
            >
                {screens.map((screen, index) => (
                    <Onboarding
                        key={index}
                        title={screen.title}
                        description={screen.description}
                        image={screen.image}
                        active={index === activeScreen}
                        handleNext={handleNext}
                        handleSkip={handleSkip}
                    />
                ))}
            </ScrollViewBase>
        </View>
    )
}
