import React from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Styles } from '../components/common';
import { Title, Text, Image, View } from '../components/controls';

type Props = {
    onDone: () => void;
}
const Slides = [
    {
        key: 's1',
        title: 'Great Offers',
        text: 'Enjoy Great offers on our all services',
        image: require('../../assets/images/hc2.png'),
        backgroundColor: '#febe29',
    },
    {
        key: 's2',
        title: 'Best Deals',
        text: ' Best Deals on all our services',
        image: require('../../assets/images/hc1.gif'),
        backgroundColor: '#22bcb5',
    },
    {
        key: 's3',
        title: 'Bus Booking',
        text: 'Enjoy Travelling on Bus with flat 100% on',
        image: require('../../assets/images/hc1.gif'),
        backgroundColor: '#3395ff',
    }
];

const renderButton = (aName: string) => (
    <View style={Styles.button}>
        <Text style={Styles.introTextStyle}>{aName}</Text>
    </View>
);

const OnboardingItem = ({ item }: { item: any }) => {
    return (
        <View style={styles.introContainer} >
            <View style={styles.introImageStyle} >
                <Image image={item.image} resizeMode="contain" style={{ maxHeight: '80%' }} />
            </View>
            <Title style={Styles.introTitleStyle} > {item.title} </Title>
            <Text style={Styles.introTextStyle}>
                {item.text}
            </Text>
        </View >
    )
};

export default (props: Props) => {
    return (
        <AppIntroSlider
            data={Slides}
            renderItem={OnboardingItem}
            showSkipButton
            showPrevButton
            onDone={props.onDone}
            onSkip={props.onDone}
            renderSkipButton={renderButton.bind(this, 'Skip')}
            renderNextButton={renderButton.bind(this, 'Next')}
            renderDoneButton={renderButton.bind(this, 'Done')}
            renderPrevButton={renderButton.bind(this, 'Prev')}
        />
    );
};

const styles = StyleSheet.create({
    introContainer: {
        flex: 1,
        justifyContent: 'space-around',
    },
    introImageStyle: {
        flex: 1,
        alignSelf: 'center'
    },
    introTextStyle: {
        flex: 3,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 30,
    },
    introTitleStyle: {
        flex: 4,
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: 'bold',
    },
});