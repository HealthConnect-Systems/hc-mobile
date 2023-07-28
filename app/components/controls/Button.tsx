import React from 'react';
import { Button as PaperButton } from 'react-native-paper';

export const Buton = (props: typeof PaperButton) => {
    return (<PaperButton mode="contained"
        onPress={
            () => console.log('Pressed')
        } >
        {props.name}
    </PaperButton>
    );
}
