import { call, put, Effect, takeEvery } from 'redux-saga/effects';
import * as Actions from './AuthActions';
import AuthApi from './AuthApi';

export function* login(action) {
    try {
        const response: boolean = yield call(
            AuthApi.login as any,
            action.payload
        );

        if (response === false) {
            throw Error();
        }
        yield put(Actions.loginSuccess(action.payload.email));
    } catch {
        yield put(Actions.loginError());
    }
}

const sagas: Effect[] = [takeEvery(Actions.login, login)];

export default sagas;
