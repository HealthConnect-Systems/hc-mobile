import React from 'react';
import { View as NativeView } from 'react-native';

export const View = (props: NativeView['props']) => {
    return (<NativeView {...props} >
        {props.children}
    </NativeView>
    );
}