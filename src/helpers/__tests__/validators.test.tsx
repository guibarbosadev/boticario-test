import { email, required } from '../validators';

describe('validators', () => {
    it("validator 'required' returns undefined when VALID", () => {
        const errorMessage = 'my custom message';

        expect(required()('some value')).toBe(undefined);
        expect(required(errorMessage)('some value')).toBe(undefined);
    });

    it("validator 'required' returns errorMessage when INVALID", () => {
        const errorMessage = 'my custom message';

        expect(required(errorMessage)('')).toBe(errorMessage);
    });
    it("validator 'email' returns undefined when email is VALID", () => {
        const errorMessage = 'my custom message';
        const validEmail = 'email@example.com';

        expect(email(errorMessage)(validEmail)).toBe(undefined);
    });

    it("validator 'email' returns errorMessage when email is INVALID", () => {
        const errorMessage = 'my custom message';
        const invalidEmails = [
            '',
            '@',
            'myfakeemail',
            'email@',
            'email@example',
            'examil@example.'
        ];

        invalidEmails.forEach((invalidEmail) => {
            expect(email(errorMessage)(invalidEmail)).toBe(errorMessage);
        });
    });
});
