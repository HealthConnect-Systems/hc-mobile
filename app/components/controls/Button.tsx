import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import Themed, { getTheme } from '../common/Themed';

type Props = React.ComponentProps<typeof PaperButton>;
export const Button: React.FC<Props> = (props: Props) => {
    return (<PaperButton  {...props} mode="contained" theme={getTheme()}
    >

        {props.children}
    </PaperButton>
    );
}
