import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import SignUpForm, { SignUpFormProps } from '..';

describe('SignUpForm | Component', () => {
    it('renders correctly', () => {
        const { toJSON } = render(<SignUpForm />);

        expect(toJSON()).toMatchSnapshot();
    });

    it('renders name, email and password inputs', () => {
        const { queryByPlaceholder } = render(<SignUpForm />);
        const placeholders = ['Nome', 'Email', 'Senha'];

        placeholders.forEach((placeholder) => {
            expect(queryByPlaceholder(placeholder)).toBeTruthy();
        });
    });

    it('renders submit button', () => {
        const { queryByTestId } = render(<SignUpForm />);

        expect(queryByTestId('submit-button')).toBeTruthy();
    });

    it('renders initial values', () => {
        const props: SignUpFormProps = {
            initialValues: {
                name: 'Some name',
                email: 'email@example.com',
                password: 'some password'
            }
        };
        const { queryByDisplayValue } = render(<SignUpForm {...props} />);

        for (const key in props.initialValues) {
            const value = props.initialValues[key];
            expect(queryByDisplayValue(value)).toBeTruthy();
        }
    });

    it('[VALID] call props.onSubmit', () => {
        const props: SignUpFormProps = {
            initialValues: {
                name: 'Some name',
                email: 'email@example.com',
                password: 'some password'
            },
            onSubmit: jest.fn()
        };
        const { getByTestId } = render(<SignUpForm {...props} />);
        const submitButton = getByTestId('submit-button');

        expect(props.onSubmit).toHaveBeenCalledTimes(0);

        fireEvent.press(submitButton);
        expect(props.onSubmit).toHaveBeenCalledTimes(1);
    });

    it('[INVALID] DO NOT calls props.onSubmit', () => {
        const props: SignUpFormProps = {
            onSubmit: jest.fn()
        };
        const { getByTestId } = render(<SignUpForm {...props} />);
        const submitButton = getByTestId('submit-button');

        expect(props.onSubmit).toHaveBeenCalledTimes(0);

        fireEvent.press(submitButton);
        expect(props.onSubmit).toHaveBeenCalledTimes(0);
    });
});
