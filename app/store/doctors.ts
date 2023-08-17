import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

export interface DoctorState {
    name: string;
    email: string;
    speciality: string;
    gender: string;
    phone: string;
    photo: string;
}

export interface DoctorsState extends Array<DoctorState> { }

const initialState: DoctorsState = [{
    name: 'Doctor 1',
    email: 'doctor1@email.com',
    gender: 'male',
    speciality: 'OG',
    phone: '09987654321',
    photo: ''
},
{
    name: 'Doctor 2',
    email: 'doctor2@email.com',
    speciality: 'MBBS',
    gender: 'male',
    phone: '09987654321',
    photo: ''
},
{
    name: 'Doctor 3',
    email: 'doctor3@email.com',
    speciality: 'OG',
    gender: 'female',
    phone: '09987654321',
    photo: ''
}];

const doctorsSlice = createSlice({
    name: 'Doctors',
    initialState,
    reducers: {
        search: (state, action: PayloadAction<string>) => {
            return state.filter((aDoctor) => {
                return _.includes(
                    _.lowerCase(action.payload),
                    _.reduce(aDoctor, (result, value) => _.lowerCase(`${result} ${value}`), ``)
                );
            }
            );
        },
        list: (state) => {
            return state;
        }
    }
});

export const { search, list } = doctorsSlice.actions;