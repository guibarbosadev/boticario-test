import { LoginFormValues } from '../src/components/login-form';
import { User } from '../src/types/User';
import { SignUpFormValues } from '../src/components/sign-up-form';

export const FAKE_LOGIN_FORM: LoginFormValues = {
    email: 'email@example.com',
    password: 'some password'
};

export const FAKE_USER: User = {
    name: 'Some name',
    email: 'email@example.com'
};

export const FAKE_SIGN_UP_FORM: SignUpFormValues = {
    ...FAKE_USER,
    password: 'some password'
};
