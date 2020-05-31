import { createActions } from 'redux-actions';
import { SignUpFormValues } from '../../components/sign-up-form/index';
import { User } from '../../types/User';

export const { signUp, signUpSuccess, signUpError } = createActions(
    {
        SIGN_UP: (values: SignUpFormValues) => values,
        SIGN_UP_SUCCESS: (user: User) => user,
        SIGN_UP_ERROR: () => {}
    },
    { prefix: 'user' }
);
