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
    },
    {
        key: 's2',
        title: 'Best Deals',
        text: ' Best Deals on all our services',
        image: require('../../assets/images/hc1.gif'),
    },
    {
        key: 's3',
        title: 'Bus Booking',
        text: 'Enjoy Travelling on Bus with flat 100% on',
        image: require('../../assets/images/hc1.gif'),
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

    <TouchableOpacity style={Styles.button}>
        <Text style={Styles.introTextStyle}>
            Done</Text>
    </TouchableOpacity>

);

const OnboardingItem = ({ item }: { item: any }) => {
    const height = Dimensions.get('window').height * 0.5;
    return (
        <View
            style={[
                styles.container,
                {
                    // Try setting `flexDirection` to `"row"`.
                    flexDirection: 'column',
                    backgroundColor: 'black'
                },
            ]}
        >
            <View style={{ flex: 1, backgroundColor: 'red' }} >
                {/* <Image image={item.image} resizeMode="center" style={{ height }} /> */}
            </View>
            <View style={{ flex: 2, backgroundColor: 'green' }} >
                <Title > {item.title} </Title>
                <Text style={Styles.introTextStyle}>
                    {item.text}
                </Text>
            </View>
            <View style={{ flex: 3, backgroundColor: 'yellow' }} >
                <Title > {item.title} </Title>
                <Text style={Styles.introTextStyle}>
                    {item.text}
                </Text>
            </View>
        </View >
    )
};

export default (props: Props) => {
    const theme = useColorScheme() === 'dark' ? Themed.dark : Themed.light;
    const insets = useSafeAreaInsets();
    return (
        <>
            <PaperProvider >
                <AppIntroSlider
                    data={Slides}
                    renderItem={OnboardingItem}
                    style={{
                        // backgroundColor: 'green',

                    }}
                    onDone={props.onDone}
                    showPrevButton={true}
                    showSkipButton={true}
                    contentInset={insets}

                />
            </PaperProvider>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        color: 'blue'
    },
});