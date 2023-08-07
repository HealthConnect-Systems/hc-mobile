import React from 'react';
import styles from '../common/Styles';
import { View as NativeView } from 'react-native';

export const View = (props: NativeView['props']) => {
    const style = props.style;
    return (<NativeView {...props} style={{ alignItems: 'center', ...style?.valueOf }}>
        {props.children}
    </NativeView >
    );
}

export const Row = (props: NativeView['props']) => {
    const style = props.style;
    return (<NativeView {...props} style={{ ...styles.row, ...style?.valueOf }}>
        {props.children}
    </NativeView >
    );
}

// export const SafeAreaView = (props: NativeSafeAreaView['props']) => {
//     const style = props.style;

//     return (<NativeSafeAreaView {...props} style={{ flex: 1, alignItems: 'center', ...style?.valueOf }}>
//         {props.children}
//     </NativeSafeAreaView >
//     );
// }