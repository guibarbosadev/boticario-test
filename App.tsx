import React from 'react';
import { StatusBar, Text } from 'react-native';

const App: React.FunctionComponent<{}> = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Text>Something</Text>
        </>
    );
};

export default App;
