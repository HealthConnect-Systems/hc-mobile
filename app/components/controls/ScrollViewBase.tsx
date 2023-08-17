import React from 'react';
import { ScrollViewBase as NativeScrollViewBase } from 'react-native';

type Props = React.ComponentProps<typeof NativeScrollViewBase>

export const ScrollViewBase = (props: Props) => {
    return (<NativeScrollViewBase {...props} >
        {props.children}
    </NativeScrollViewBase>
    );
}