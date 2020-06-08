import AsyncStorage from '@react-native-community/async-storage';
import UserApi from '../UserApi';
import { FAKE_SIGN_UP_FORM } from '../../../../__mocks__/mocks';

describe('User | API', () => {
    it('signUp fails if email is already registered', async () => {
        const expectedErrorMessage = 'Email already registered';

        try {
            AsyncStorage.getItem = jest.fn(() => Promise.resolve({})) as any;
            expect(AsyncStorage.getItem).toHaveBeenCalledTimes(0);
            await UserApi.signUp(FAKE_SIGN_UP_FORM);
        } catch (errorMessage) {
            expect(AsyncStorage.getItem).toHaveBeenCalledTimes(1);
            expect(AsyncStorage.setItem).toHaveBeenCalledTimes(0);
            expect(errorMessage).toBe(expectedErrorMessage);
        }
    });

    it('signUp success', async () => {
        AsyncStorage.getItem = jest.fn(() => Promise.resolve()) as any;
        expect(AsyncStorage.getItem).toHaveBeenCalledTimes(0);
        await UserApi.signUp(FAKE_SIGN_UP_FORM);
        expect(AsyncStorage.getItem).toHaveBeenCalledTimes(1);
        expect(AsyncStorage.setItem).toHaveBeenCalledTimes(1);
    });
});
