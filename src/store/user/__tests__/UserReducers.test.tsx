import reducers, { initialState, UserInitialState } from '../UserReducers';
import { signUpSuccess } from '../UserActions';
import { FAKE_USER } from '../../../../__mocks__/mocks';

describe('User | Reducers', () => {
    it('SIGN_UP_SUCCESS', () => {
        const successAction = signUpSuccess(FAKE_USER);
        const state = reducers(initialState, successAction);
        const expectedState: UserInitialState = {
            user: FAKE_USER
        };

        expect(state).toStrictEqual(expectedState);
    });
});
