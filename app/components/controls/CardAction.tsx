import React from 'react';
import { Card } from 'react-native-paper';
import { Button } from './Button';
export const CardAction = (label: string) => {
    return (
        <Card.Actions style={{ padding: 0 }}>
            <Button>
                {
                    label
                }
            </Button>
        </Card.Actions>
    )
}