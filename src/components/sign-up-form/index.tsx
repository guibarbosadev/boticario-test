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

function NameInput() {
    return renderInput('name', { placeholder: 'Nome' }, [required()]);
}

function EmailInput() {
    return renderInput('email', emailProps, [email()]);
}

function PasswordInput() {
    return renderInput('password', passwordProps, [required()]);
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit, initialValues }) => {
    return (
        <Form
            onSubmit={(values) => onSubmit && onSubmit(values)}
            initialValues={initialValues}
            render={({ handleSubmit }) => (
                <>
                    <NameInput />
                    <EmailInput />
                    <PasswordInput />
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
