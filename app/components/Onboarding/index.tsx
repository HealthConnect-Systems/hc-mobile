import React from 'react';
import { NextButton, DoneButton, PrevButton, SkipButton } from '../controls';
import OnboardingItem from './OnboardingItem';
import Slides from './Slides';
import AppIntroSlider from 'react-native-app-intro-slider';

type Props = {
    onDone: () => void;
}
export default (props: Props) => {
    return (
        <AppIntroSlider
            data={Slides}
            renderItem={OnboardingItem}
            onDone={props.onDone}
            showPrevButton={true}
            renderDoneButton={() => <DoneButton />}
            renderPrevButton={() => <PrevButton />}
            renderNextButton={() => <NextButton />}
        />
    );
}; 