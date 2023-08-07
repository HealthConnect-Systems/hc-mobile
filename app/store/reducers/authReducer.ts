import initialState from './initialState';
export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.user
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
}