import React from 'react';
import { View as NativeView } from 'react-native';

export const View = (props: NativeView['props']) => {
    const style = props.style;
    return (<NativeView {...props} style={{ alignItems: 'center', ...style?.valueOf }}>
        {props.children}
    </NativeView >
    );
}