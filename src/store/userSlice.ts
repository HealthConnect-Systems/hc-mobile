import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    name: string;
    email: string;
    photo: string;
}

const initialState: UserState = {
    name: '',
    email: '',
    photo: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserState>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        logout: (state) => {
            state.name = '';
            state.email = '';
            state.photo = '';
        }
    }
});

export const { login, logout } = userSlice.actions;