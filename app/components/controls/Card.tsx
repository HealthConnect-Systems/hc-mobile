import React from 'react';
import { Card as PaperCard, CardActionsProps } from 'react-native-paper';

type CardProps =   React.ComponentProps<typeof PaperCard>
type Props = CardProps & { children: React.ReactNode, cardActions?: {    
    Actions: CardActionsProps
}}
export const Card: React.FC<Props> = (props: Props) => {
    return (<PaperCard {...props} >
        {props.children}
    </PaperCard>
    );
}
 