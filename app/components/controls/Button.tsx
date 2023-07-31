import React from 'react';
import { Button as PaperButton } from 'react-native-paper';

type Props = React.ComponentProps<typeof PaperButton>;
export const Button: React.FC<Props> = (props: Props) => {
    return (<PaperButton mode="contained"
        onPress={
            () => console.log('Pressed')
        } >
        {props.children}
    </PaperButton>
    );
}
