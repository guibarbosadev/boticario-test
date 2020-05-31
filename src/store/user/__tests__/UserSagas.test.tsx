import { signUp } from '../UserSagas';
import { runSaga } from 'redux-saga';
import * as Actions from '../UserActions';
import { FAKE_SIGN_UP_FORM } from '../../../../__mocks__/mocks';
import UserApi from '../UserApi';

describe('User | Sagas', () => {
    it('signUp success ', async () => {
        const dispatch = jest.fn();
        const { name, email } = FAKE_SIGN_UP_FORM;
        const action = Actions.signUp(FAKE_SIGN_UP_FORM);
        const successAction = Actions.signUpSuccess({ name, email });

        UserApi.signUp = jest.fn(() => Promise.resolve({ name, email }));
        await runSaga({ dispatch }, signUp, action);

        expect(dispatch).toHaveBeenCalledWith(successAction);
    });

    it('signUp fail', async () => {
        const dispatch = jest.fn();
        const action = Actions.signUp();
        const errorAction = Actions.signUpError();

        UserApi.signUp = jest.fn(() => Promise.reject());
        await runSaga({ dispatch }, signUp, action);

        expect(dispatch).toHaveBeenCalledWith(errorAction);
    });
});
