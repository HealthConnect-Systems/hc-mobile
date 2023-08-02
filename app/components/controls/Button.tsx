import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import { getTheme } from '../common/Themed';

type Props = React.ComponentProps<typeof PaperButton>;
export const Button: React.FC<Props> = (props: Props) => {
    return (<PaperButton  {...props}
    >
        {props.children}
    </PaperButton>
    );
}
