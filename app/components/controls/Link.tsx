import React from 'react';
import { Link as ExpoLink} from 'expo-router';
import { Text } from './Text'; 
import { Styles } from '../common';

type LinkProps =   React.ComponentProps<typeof ExpoLink>
type Props = LinkProps & { children: React.ReactNode }
export const Link: React.FC<Props> = (props: Props) => {
    return (<Link {...props} >
        <Text style={Styles.link}>{props.children}</Text>        
    </Link>
    );
}
 