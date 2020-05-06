import {
    applyMiddleware,
    combineReducers,
    createStore,
    Middleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import auth from './auth/AuthReducers';
import sagas from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

function bindMiddleware(middlewares: Middleware[]) {
    if (process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(...middlewares));
    }

    return applyMiddleware(...middlewares);
}

export default function generateStore() {
    const sagaMiddleware = createSagaMiddleware();
    const reducers = combineReducers({ auth });
    const store = createStore(reducers, bindMiddleware([sagaMiddleware]));

    sagaMiddleware.run(sagas);

    return store;
}
