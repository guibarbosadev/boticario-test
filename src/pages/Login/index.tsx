import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import LoginForm from '../../components/login-form';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { login } from '../../store/auth/AuthActions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { RootInitialState } from '../../store';

const LoginPage: React.FC<NavigationStackScreenProps> = ({ navigation }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector<RootInitialState>(
        ({ auth }) => auth.currentUser
    );

    useEffect(() => {
        if (currentUser) {
            navigation.navigate('Home');
        }
    }, [currentUser, navigation]);

    return (
        <View style={styles.container}>
            <LoginForm onSubmit={(values) => dispatch(login(values))} />
            <Text onPress={() => navigation.navigate('SignUp')}>
                Cadastre-se
            </Text>
        </View>
    );
};

export default LoginPage;
