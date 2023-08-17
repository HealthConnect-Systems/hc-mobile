import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoginState {
    email: string;
    password: string;
}

export interface UserState {
    name?: string;
    email: string;
    password?: string;
    token?: string;
    photo?: string;
}

const initialState: UserState = {
    name: 'Kyaw Lin Myat',
    email: 'mr.kyawlinmyat@gmail.com',
    photo: '',
};

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginState>) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        logout: (state) => {
            state.name = '';
            state.email = '';
            state.photo = '';
        },
        loginSuccess: (state, action: PayloadAction<UserState>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
            state.token = action.payload.token;
        },

    }
});

export const { login, loginSuccess, logout } = authSlice.actions;