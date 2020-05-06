import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import LoginForm from './src/components/login-form';
import generateStore from './src/store';

const App: React.FunctionComponent<{}> = () => {
    return (
        <Provider store={generateStore()}>
            <StatusBar barStyle="light-content" />
            <LoginForm onSubmit={(values) => console.log('values: ', values)} />
        </Provider>
    );
};

export default App;
