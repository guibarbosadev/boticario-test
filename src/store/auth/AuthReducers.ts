import { handleActions } from 'redux-actions';
import { AnyAction } from 'redux';

export interface AuthInitialState {
    currentUser?: string;
}

export const initialState: AuthInitialState = {
    currentUser: undefined
};

const reducers = handleActions(
    {
        LOGIN_SUCCESS: (state: AuthInitialState, { payload }: AnyAction) => {
            return { ...state, currentUser: payload };
        }
    },
    initialState,
    { prefix: 'auth' }
);

export default reducers;
