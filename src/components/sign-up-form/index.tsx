import React from 'react';
import { renderInput } from '../../helpers/form';
import { TextInputProps, Button } from 'react-native';
import { required, email } from '../../helpers/validators';
import { Form } from 'react-final-form';

const formInitialValues: SignUpFormValues = {
    email: '',
    name: '',
    password: ''
};

export interface SignUpFormValues {
    name: string;
    email: string;
    password: string;
}

const emailProps: TextInputProps = {
    placeholder: 'Email',
    textContentType: 'emailAddress'
};
const passwordProps: TextInputProps = {
    placeholder: 'Senha',
    textContentType: 'password'
};

export interface SignUpFormProps {
    onSubmit?: (values: SignUpFormValues) => void;
    initialValues?: SignUpFormValues;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit, initialValues }) => {
    const nameInput = renderInput('name', { placeholder: 'Name' }, [
        required()
    ]);
    const emailInput = renderInput('email', emailProps, [email()]);
    const passwordInput = renderInput('password', passwordProps, [required()]);

    return (
        <Form
            onSubmit={(values) => onSubmit && onSubmit(values)}
            initialValues={initialValues}
            render={({ handleSubmit }) => (
                <>
                    {nameInput}
                    {emailInput}
                    {passwordInput}
                    <Button
                        title="Cadastrar-se"
                        testID="submit-button"
                        onPress={handleSubmit}
                    />
                </>
            )}
        />
    );
};

SignUpForm.defaultProps = {
    onSubmit: () => {},
    initialValues: formInitialValues
};

export default SignUpForm;
