import React from 'react';
import { Form } from 'react-final-form';
import { Button, TextInputProps } from 'react-native';
import { renderInput } from '../../helpers/form';
import { email, required } from '../../helpers/validators';

const formInitialValues: LoginFormValues = {
    email: '',
    password: ''
};

export interface LoginFormValues {
    email: string;
    password: string;
}

export interface LoginFormProps {
    onSubmit?: (values: LoginFormValues) => void;
    initialValues?: LoginFormValues;
}

const LoginForm: React.FunctionComponent<LoginFormProps> = ({
    onSubmit,
    initialValues
}) => {
    const emailProps: TextInputProps = {
        placeholder: 'Email',
        textContentType: 'emailAddress'
    };
    const passwordProps: TextInputProps = {
        placeholder: 'Senha',
        textContentType: 'password'
    };
    const emailInput = renderInput('email', emailProps, [email()]);
    const passwordInput = renderInput('password', passwordProps, [required()]);

    return (
        <Form
            onSubmit={(values) => onSubmit && onSubmit(values)}
            initialValues={initialValues}
            render={({ handleSubmit }) => (
                <>
                    {emailInput}
                    {passwordInput}
                    <Button
                        title="Entrar"
                        testID="submit-button"
                        onPress={handleSubmit}
                    />
                </>
            )}
        />
    );
};

LoginForm.defaultProps = {
    onSubmit: () => undefined,
    initialValues: formInitialValues
};

export default LoginForm;
