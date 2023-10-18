import { combineReducers } from 'redux';
import { authReducer } from './authReducer';

export var rootReducer = combineReducers({
    auth: authReducer
});
