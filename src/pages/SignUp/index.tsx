import React from 'react';
import { View } from 'react-native';
import SignUpForm from '../../components/sign-up-form';
import styles from './styles';

const SignUpPage: React.FC<{}> = () => {
    return (
        <View style={styles.container}>
            <SignUpForm />
        </View>
    );
};

export default SignUpPage;
