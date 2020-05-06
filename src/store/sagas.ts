import auth from './auth/AuthSagas';
import { all } from 'redux-saga/effects';

export default function* sagas() {
    yield all([...auth]);
}
