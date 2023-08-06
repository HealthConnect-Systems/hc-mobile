import React from 'react';
import { useColorScheme } from 'react-native';
import OnboardingItem from './OnboardingItem';
import Slides from './Slides';
import AppIntroSlider from 'react-native-app-intro-slider';
import Themed from '../common/Themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
    onDone: () => void;
}
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