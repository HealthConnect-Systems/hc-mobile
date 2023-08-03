import React from 'react';
import { IconButton } from 'react-native-paper';
import Sizes from '../../constants/Sizes';

export const ArrowRight: React.FC = () => {
    return (<IconButton
        icon="arrow-right"
        size={Sizes.icon24}
    />
    );
}

export const ArrowLeft: React.FC = () => {
    return (<IconButton
        icon="arrow-left"
        size={Sizes.icon24}
    />
    );
}

export const Check: React.FC = () => {
    return (<IconButton
        icon="check"
        size={Sizes.icon24}
    />
    );
}

