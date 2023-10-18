import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { users } from './mock_dataset';

const mock = new MockAdapter(axios, { delayResponse: 2000 });

mock.onPost('/api/auth/login').reply((config) => {
    const { email, password } = JSON.parse(config.data);
    const user = users.find((x) => x.email === email && x.password === password);
    if (!user) {
        return [400, { message: 'Email or password is incorrect' }];
    }
    return [200, { ...user, password: undefined }];
});
