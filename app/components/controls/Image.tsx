import React from 'react';
import { Image as NativeImage } from 'react-native';

type Props = Omit<React.ComponentProps<typeof NativeImage> & { image: any }, 'source'>;

export const Image: React.FC<Props> = (props?: Props) => {
    return (<NativeImage source={props?.image} {...props} />
    );
}