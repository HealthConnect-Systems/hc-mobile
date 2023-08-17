import React from 'react';
import { Button, TextInput, Modal, Portal, Row } from '../components/controls';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';

type Props = {
    visible: boolean;
    onCanceled: () => void;
    onLogin: (userInfo: any) => void;
};

const LoginScreen = (props: Props) => {
    const dispatch = useDispatch();
    const  [email, setEmail] = React.useState('');
    const  [password, setPassword] = React.useState('');

    const handleLogin = () => {
        dispatch(login({email, password}));
        props?.onLogin({email, password});
    }

    const cancel = () => {
        props?.onCanceled();
    }
 
    return (
        <Portal>
            <Modal visible={props.visible} onDismiss={cancel} >
                <TextInput label="Email" />
                <TextInput label="Password" />
                <Row>
                    <Button onPress={handleLogin}>Sign In</Button>
                    <Button onPress={cancel}>Cancel</Button>
                </Row>
            </Modal>
        </Portal>
    )
}

export default LoginScreen;