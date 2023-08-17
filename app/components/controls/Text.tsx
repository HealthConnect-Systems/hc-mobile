import React from 'react';
import { Text as PaperText } from 'react-native-paper'; 

type Props = React.ComponentProps<typeof PaperText>;

export const Text: React.FC<Props> = (props: Props) => {
    return (<PaperText {...props}>
        {props.children}
    </PaperText>);
}

export const MonoText = (props: Props) => {
    return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}

export const Title = (props: Props) => { 
    return (<PaperText {...props} style={{
        fontSize: 18,
        fontWeight: 'bold', 
        alignContent: 'center',
    }}>
        {props.children}
    </PaperText>
    );
}
