import { getUserKey } from '..';
import { FAKE_USER } from '../../../__mocks__/mocks';

describe('Helpers', () => {
    it('getUserKey()', () => {
        const { email } = FAKE_USER;
        const expectedKey = `user_${email}`;
        const key = getUserKey(email);

        expect(key).toEqual(expectedKey);
    });
});
