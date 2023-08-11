import React from 'react';
import { Dimensions, useColorScheme, StyleSheet, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Themed from '../components/common/Themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Styles } from '../components/common';
import { Title, Text, View, ImageBackground, Image } from '../components/controls';
import { PaperProvider } from 'react-native-paper';


type Props = {
    onDone: () => void;
}
const Slides = [
    {
        key: 's1',
        title: 'Great Offers',
        text: 'Enjoy Great offers on our all services',
        image: require('../../assets/images/hc2.png'),
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

];
const onSkip = () => {
    // Handle skip button press
    console.log('Skip button pressed');
};

const onDone = () => {
    // Handle done button press
    console.log('Done button pressed');
};

const renderSkipButton = () => (
    <TouchableOpacity onPress={onSkip} style={Styles.button}>

        <Text style={Styles.introTextStyle}>
            Skip</Text>
    </TouchableOpacity>
);

const renderDoneButton = () => (

    <TouchableOpacity  style={Styles.button}>
        <Text style={Styles.introTextStyle}>
            Done</Text>
    </TouchableOpacity>

);

const OnboardingItem = ({ item }: { item: any }) => {
    const height = Dimensions.get('window').height * 0.5;
    return (
        <View>
            <View >
                <Image image={item.image} resizeMode="center" style={{ height }} />
            </View>
            <View>
                <Title > {item.title} </Title>
                <Text style={Styles.introTextStyle}>
                    {item.text}
                </Text>
            </View>
        </View >
    );
};

export default (props: Props) => {
    const theme = useColorScheme() === 'dark' ? Themed.dark : Themed.light;
    const insets = useSafeAreaInsets();
    return (
        <>
            <PaperProvider theme={Themed.dark}>
                <AppIntroSlider
                    data={Slides}
                    renderItem={OnboardingItem}
                    style={{
                        backgroundColor: 'red',
                        shadowColor: theme.colors.shadow,
                        alignContent: 'center',
                        borderColor: 'black'

                    }}
                    onDone={props.onDone}
                    showPrevButton={true}
                    showSkipButton={true}
                    renderNextButton={renderDoneButton}
                    contentInset={insets}
                />
            </PaperProvider>
        </>
    );
}; 