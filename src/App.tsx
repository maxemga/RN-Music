import React from 'react';
import { StackNavigation } from './components/Navigation/StackNavigation';
import { Provider } from 'react-redux';
import { store } from './store';

export const App = () => {
    return (
        <Provider store={store}>
            <StackNavigation />
        </Provider>
    );
};
