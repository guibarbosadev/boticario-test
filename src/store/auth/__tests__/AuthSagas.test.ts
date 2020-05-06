import { FAKE_LOGIN_FORM } from './../../../../__mocks__/mocks';
import { runSaga, Saga } from 'redux-saga';
import { login } from '../AuthSagas';
import AuthApi from '../AuthApi';
import * as Actions from '../AuthActions';

describe('Auth | Sagas', () => {
    it('login success', async () => {
        const dispatch = jest.fn();
        const action = Actions.login(FAKE_LOGIN_FORM);
        const successAction = Actions.loginSuccess(FAKE_LOGIN_FORM.email);

        AuthApi.login = jest.fn(() => Promise.resolve(true));
        await runSaga({ dispatch }, login as Saga, action).toPromise();

        expect(dispatch).toHaveBeenCalledWith(successAction);
    });

    it('login error', async () => {
        const dispatch = jest.fn();
        const action = Actions.login(FAKE_LOGIN_FORM);
        const errorAction = Actions.loginError();

        AuthApi.login = jest.fn(() => Promise.resolve(false));
        await runSaga({ dispatch }, login as Saga, action).toPromise();

        expect(dispatch).toHaveBeenCalledWith(errorAction);
    });
});
