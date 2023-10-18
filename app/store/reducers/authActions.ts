import { loginSuccess, loginFailure, logout } from './actions';
import AuthService from '../../services/auth'

export const loginUser = (credentials: any) => {
    return async (dispatch: Function) => {
        try {
            const { email, password } = credentials;
            const response = await AuthService.login(email, password);

            if (response.success) {
                dispatch(loginSuccess(response.user));
            } else {
                dispatch(loginFailure(response.error));
            }
        } catch (error: any) {
            dispatch(loginFailure(error.message));
        }
    };
};
