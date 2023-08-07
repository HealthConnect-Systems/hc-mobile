import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { topicReducer } from './topicReducer';
export var rootReducer = combineReducers({
    auth: authReducer,
    cart: topicReducer
});
