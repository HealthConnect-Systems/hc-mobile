import React from 'react';
import { Button, TextInput, Modal, Portal, Row, View } from '../components/controls';
import { useDispatch } from 'react-redux';
import AuthService from '../services/auth'

type Props = {
    visible: boolean;
    onCanceled: () => void;
    onLogin: (userInfo: any) => void;
};

const LoginScreen = (props: Props) => {
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        AuthService.login(email, password)
        // dispatch(login({email, password}));
        props?.onLogin({email, password});
        console.log('Login clicked');
        console.log(email, password); 
    }

    const cancel = () => {
        props?.onCanceled();
    }

    return (
        <View>
            <Portal>
                <Modal visible={props.visible} onDismiss={cancel} >
                    <TextInput label="User Name or email" value={email}  onChangeText={text => setEmail(text)}/>
                    <TextInput label="Password" secureTextEntry value={password}  onChangeText={text => setPassword(text)}/>
                    <Button onPress={handleLogin} style={[{ alignSelf: 'flex-end', margin: 15 }]}>Sign In</Button>
                </Modal>
            </Portal>
        </View>
    )
}

export default LoginScreen;