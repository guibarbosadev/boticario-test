import React from 'react';
import { StatusBar } from 'react-native';
import LoginForm from './src/components/login-form';

const App: React.FunctionComponent<{}> = () => {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <LoginForm onSubmit={(values) => console.log('values: ', values)} />
        </>
    );
};

export default App;
