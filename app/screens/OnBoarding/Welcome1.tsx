import { StyleSheet, StatusBar, Image } from 'react-native';
import React, { useState } from "react";

import { Text, View } from '../../components/common/Themed';
import AppIntroSlider from "react-native-app-intro-slider";
import Theme, { SIZES } from '../../constants/Theme';

const slides = [
    {
        id: 1,
        title: 'Image 1',
        description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
        image: require('../../../assets/images/splash.png')
    },
    {
        id: 2,
        title: 'Image 2',
        description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
        image: require('../../../assets/images/favicon.png'),

    },
    {
        id: 3,
        title: 'Image 3  ',
        description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
        image: require('../../../assets/images/icon.png')
    }
]
export default function PharmaciesScreen() {
    const [showHomePage, setShowHomePage] = useState(true);

    StatusBar.setBarStyle('light-content', true);
    StatusBar.setBackgroundColor(Theme.colors.tertiary);

    const buttonLabel = (label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined) => {
        return (

            <View style={{
                padding: 10,
                backgroundColor: Theme.colors.primary
            }}>

                <Text style={{
                    fontWeight: '200',

                }}>
                    {label}
                </Text>
            </View>
        )
    }

    // if(!showHomePage) {
    return (
        <AppIntroSlider

            data={slides}

            renderItem={({ item }) => {
                return (
                    <View style={{
                        backgroundColor: Theme.colors.primary,

                        flex: 1,
                        alignItems: 'center',
                        padding: 15,
                        paddingTop: 100,
                    }}>
                        <Image
                            source={item.image}
                            style={{
                                width: SIZES.width - 50,
                                height: SIZES.height * 0.5,
                            }}
                            resizeMode="contain"
                        />
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: SIZES.h1,
                        }}>
                            {item.title}
                        </Text>
                        <Text style={{
                            textAlign: 'center',
                            paddingTop: 5,
                        }}>
                            {item.description}
                        </Text>
                    </View>
                )
            }}
            activeDotStyle={{
                backgroundColor: Theme.colors.primaryBackground,
                width: 30,
            }}
            showSkipButton
            renderNextButton={() => buttonLabel("Next")}
            renderSkipButton={() => buttonLabel("Skip")}
            renderDoneButton={() => buttonLabel("Done")}
            onDone={() => {
                setShowHomePage(true);
            }
            }
        />
    )
    // }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
