// import MockAdapter from 'axios-mock-adapter';
// import axios from 'axios';
// import { User } from '../models/User';
// import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../store/actions/constants';

// const mock = new MockAdapter(axios, { delayResponse: 2000 });

// const users: User[] = [
//     {
//         _id: '1',
//         name: 'Admin User',
//         email: 'admin@mail.com',
//     },
//     {
//         _id: '2',
//         name: 'John Doe',
//         email: 'john@mail.com',
//     }
// ];

// mock.onPost('/api/users/login').reply((config) => {
//     const { email, password } = JSON.parse(config.data);
//     const user = users.find((x) => x.email === email && x.password === password);
//     if (!user) {
//         return [400, { message: 'Email or password is incorrect' }];
//     }
//     return [200, { ...user, password: undefined }];
// });

// mock.onGet('/api/users').reply((config) => {
//     const Authorization = config.headers?.Authorization;
//     const user = users.find((x) => x._id === Authorization);
//     if (!user) {
//         return [401, { message: 'Authorization Required' }];
//     }
//     return [200, user];
// });

