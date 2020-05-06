import { AuthInitialState } from './../AuthReducers';
import { FAKE_LOGIN_FORM } from './../../../../__mocks__/mocks';
import reducers from '../AuthReducers';
import * as Actions from '../AuthActions';

describe('Auth | Reducers', () => {
    it('LOGIN_SUCCESS', () => {
        const successAction = Actions.loginSuccess(FAKE_LOGIN_FORM.email);
        const state = reducers(undefined, successAction);
        const expectedState: AuthInitialState = {
            currentUser: FAKE_LOGIN_FORM.email
        };

        expect(state).toEqual(expectedState);
    });
});
