import { SignUpFormValues } from '../../components/sign-up-form';
import { Effect, takeEvery, call, put } from 'redux-saga/effects';
import * as Actions from './UserActions';
import UserApi from './UserApi';

export function* signUp({ payload }: { payload: SignUpFormValues }) {
    try {
        const response = yield call(UserApi.signUp, payload);
        yield put(Actions.signUpSuccess(response));
    } catch {
        yield put(Actions.signUpError());
    }
}

const sagas: Effect[] = [takeEvery(Actions.signUp, signUp)];

export default sagas;
