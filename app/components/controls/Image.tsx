import React from 'react';
import { ImageStyle } from 'react-native';
import { Image as NativeImage } from 'react-native';

type Props = Omit<React.ComponentProps<typeof NativeImage> & { image: string }, 'source'>;

export const Image: React.FC<Props> = (props: Props) => {
    const image = require(`../../../assets/images/splash.png`);
    return (<NativeImage {...props} source={image} />
    );
}