import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';
import generateStore from './store';
import HomePage from './pages/Home';

const StackNavigator = createStackNavigator(
    {
        Login: {
            screen: LoginPage
        },
        SignUp: {
            screen: SignUpPage
        },
        Home: {
            screen: HomePage
        }
    },
    {
        initialRouteName: 'Login'
    }
);
const AppContainer = createAppContainer(StackNavigator);

const Routes: React.FunctionComponent<{}> = () => {
    return (
        <Provider store={generateStore()}>
            <AppContainer />
        </Provider>
    );
};

export default Routes;
