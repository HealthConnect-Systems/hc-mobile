import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import Styles from '../common/Styles';
import { View } from './View';
import { ArrowLeft, ArrowRight, Check } from './Icons';

type Props = React.ComponentProps<typeof PaperButton>;
export const Button: React.FC<Props> = (props: Props) => {
    return (<PaperButton  {...props}
    >
        {props.children}
    </PaperButton>
    );
}

export const PrevButton: React.FC = () => {
    return (
        <View style={Styles.buttonCircle}>
            <ArrowLeft />
        </View>
    );
};
export const SkipButton: React.FC = () => {
    return (
        <View style={Styles.buttonCircle}>
            <Check />
        </View>
    );
};

export const NextButton: React.FC = () => {
    return (
        <View style={Styles.buttonCircle}>
            <ArrowRight />
        </View>
    );
};

export const DoneButton: React.FC = () => {
    return (
        <View style={Styles.buttonCircle}>
            <Check />
        </View>
    );
};