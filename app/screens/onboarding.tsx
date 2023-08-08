import React from 'react';
import { Dimensions, useColorScheme } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Themed from '../components/common/Themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Styles } from '../components/common';
import { Title, Text, View, ImageBackground } from '../components/controls';
import { PaperProvider } from 'react-native-paper';


type Props = {
    onDone: () => void;
}
const Slides = [
    {
        key: 's1',
        title: 'Great Offers',
        text: 'Enjoy Great offers on our all services',
        image: require('../../assets/images/hc1.gif'),
        backgroundColor: '#22bcb5',
    },
    {
        key: 's2',
        title: 'Best Deals',
        text: ' Best Deals on all our services',
        image: require('../../assets/images/hc1.gif'),
        backgroundColor: '#3395ff',
    },
    {
        key: 's3',
        title: 'Bus Booking',
        text: 'Enjoy Travelling on Bus with flat 100% off',
        image: require('../../assets/images/hc1.gif'),
        backgroundColor: '#f6437b',
    },
    {
        key: 's4',
        title: 'Train Booking',
        text: ' 10% off on first Train booking',
        image: require('../../assets/images/hc1.gif'),
        backgroundColor: '#febe29',
    },
];


const OnboardingItem = ({ item }: { item: any }) => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return (
        <View>
            <ImageBackground source={item.image} resizeMode="center" style={{ width, height }} >
                <Title > {item.title} </Title>
                <Text style={Styles.introTextStyle}>
                    {item.text}
                </Text>
            </ImageBackground>
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
                    backgroundColor: theme.colors.onBackground,
                    shadowColor: theme.colors.shadow,
                    alignContent: 'center',

                }}
                onDone={props.onDone}
                showPrevButton={true}
                showSkipButton={true}
                contentInset={insets}
            />
        </>
    );
}; 