import React from 'react';
import { Text } from 'react-native';
import LoginForm from '../../components/login-form';
import { NavigationStackScreenProps } from 'react-navigation-stack';

const LoginPage: React.FC<NavigationStackScreenProps> = (props) => {
    return (
        <>
            <LoginForm />
            <Text onPress={() => props.navigation.navigate('SignUp')}>
                Cadastre-se
            </Text>
        </>
    );
};

export default LoginPage;
