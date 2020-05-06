import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import LoginForm, { LoginFormValues, LoginFormProps } from '..';

describe('LoginForm | Component', () => {
    it('renders correctly', () => {
        const { toJSON } = render(<LoginForm />);

        expect(toJSON()).toMatchSnapshot();
    });

    it('renders email and password inputs', () => {
        const { queryByPlaceholder } = render(<LoginForm />);

        expect(queryByPlaceholder('Email')).toBeTruthy();
        expect(queryByPlaceholder('Senha')).toBeTruthy();
    });

    it('renders submit button', () => {
        const { queryByTestId } = render(<LoginForm />);

        expect(queryByTestId('submit-button')).toBeTruthy();
    });

    it('renders initial values', () => {
        const initialValues: LoginFormValues = {
            email: 'email@example.com',
            password: 'some password'
        };
        const { queryByDisplayValue } = render(
            <LoginForm initialValues={initialValues} />
        );

        expect(queryByDisplayValue(initialValues.email)).toBeTruthy();
        expect(queryByDisplayValue(initialValues.password)).toBeTruthy();
    });

    it('[VALID] calls props.onSubmit when submit button is clicked', () => {
        const props: LoginFormProps = {
            onSubmit: jest.fn(),
            initialValues: {
                email: 'email@example.com',
                password: 'some password'
            }
        };
        const { getByTestId } = render(<LoginForm {...props} />);
        const submitButton = getByTestId('submit-button');

        expect(submitButton).toBeTruthy();
        expect(props.onSubmit).toHaveBeenCalledTimes(0);

        fireEvent.press(submitButton);
        expect(props.onSubmit).toHaveBeenCalledTimes(1);
        expect(props.onSubmit).toHaveBeenCalledWith(props.initialValues);
    });

    it('[INVALID] do not calls props.onSubmit when submit button is clicked', () => {
        const values = {
            email: undefined,
            password: 'some password'
        };
        const props = { onSubmit: jest.fn() };
        const { getByPlaceholder, getByTestId } = render(
            <LoginForm {...props} />
        );
        const emailInput = getByPlaceholder('Email');
        const passwordInput = getByPlaceholder('Senha');
        const submitButton = getByTestId('submit-button');

        fireEvent.changeText(emailInput, values.email);
        fireEvent.changeText(passwordInput, values.password);

        expect(submitButton).toBeTruthy();
        expect(props.onSubmit).toHaveBeenCalledTimes(0);

        fireEvent.press(submitButton);
        expect(props.onSubmit).toHaveBeenCalledTimes(0);
    });
});
