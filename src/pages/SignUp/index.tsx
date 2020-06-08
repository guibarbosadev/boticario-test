import React from 'react';
import { View } from 'react-native';
import SignUpForm from '../../components/sign-up-form';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/user/UserActions';

const SignUpPage: React.FC<{}> = () => {
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <SignUpForm onSubmit={(values) => dispatch(signUp(values))} />
        </View>
    );
};

export default SignUpPage;
