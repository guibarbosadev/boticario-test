import { createActions } from 'redux-actions';
import { LoginFormValues } from '../../components/login-form';

export const { login, loginSuccess, loginError } = createActions(
    {
        LOGIN: (values: LoginFormValues) => values,
        LOGIN_SUCCESS: (email: string) => email,
        LOGIN_ERROR: () => {}
    },
    { prefix: 'auth' }
);
