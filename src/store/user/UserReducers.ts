import { User } from '../../types/User';
import { handleActions } from 'redux-actions';
import { AnyAction } from 'redux';

export interface UserInitialState {
    user?: User;
}

export const initialState: UserInitialState = {};

const reducers = handleActions(
    {
        SIGN_UP_SUCCESS: (state: UserInitialState, { payload }: AnyAction) => {
            return { ...state, user: payload };
        }
    },
    initialState,
    { prefix: 'user' }
);

export default reducers;
