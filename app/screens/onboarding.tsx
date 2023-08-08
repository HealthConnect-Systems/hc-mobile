import React from 'react';
import { Dimensions, useColorScheme } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Themed from '../components/common/Themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Title } from 'react-native-paper';
import { Styles } from '../components/common';
import { Image, Text, View } from '../components/controls';


type Props = {
    onDone: () => void;
}
const Slides = [
    {
        key: 's1',
        text: 'Best Recharge offers',
        title: 'Mobile Recharge',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
        },
        backgroundColor: '#20d2bb',
    },
    {
        key: 's2',
        title: 'Flight Booking',
        text: 'Upto 25% off on Domestic Flights',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
        },
        backgroundColor: '#febe29',
    },
    {
        key: 's3',
        title: 'Great Offers',
        text: 'Enjoy Great offers on our all services',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
        },
        backgroundColor: '#22bcb5',
    },
    {
        key: 's4',
        title: 'Best Deals',
        text: ' Best Deals on all our services',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png',
        },
        backgroundColor: '#3395ff',
    },
    {
        key: 's5',
        title: 'Bus Booking',
        text: 'Enjoy Travelling on Bus with flat 100% off',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_bus_ticket_booking.png',
        },
        backgroundColor: '#f6437b',
    },
    {
        key: 's6',
        title: 'Train Booking',
        text: ' 10% off on first Train booking',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_train_ticket_booking.png',
        },
        backgroundColor: '#febe29',
    },
];


const OnboardingItem = ({ item }: { item: any }) => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return (
        <View
            style={{ backgroundColor: item.backgroundColor }}>
            <Title > {item.title} </Title>
            <Image
                style={{ width, height, resizeMode: 'contain' }}
                image={item.image} />
            <Text style={Styles.introTextStyle}>
                {item.text}
            </Text>
        </View >
    );
};

export default (props: Props) => {
    const theme = useColorScheme() === 'dark' ? Themed.dark : Themed.light;
    const insets = useSafeAreaInsets();
    return (
        <>
            <AppIntroSlider
                data={Slides}
                renderItem={OnboardingItem}
                style={{
                    backgroundColor: theme.colors.background,
                    shadowColor: theme.colors.background,
                    alignContent: 'center'
                }}
                onDone={props.onDone}
                showPrevButton={true}
                showSkipButton={true}
                contentInset={insets}
            />
        </>
    );
}; 