import _ from 'lodash';
import React from 'react';
import { View as NativeView } from 'react-native';

export const View = (props: NativeView['props']) => {
    return (<NativeView {...props} >
        {_.get(props, 'children')}
    </NativeView>
    );
}