import { EMAIL_REGEX } from './constants';

export const email = (errorMessage: string = 'Email inválido') => {
    return (emailText: string) =>
        EMAIL_REGEX.test(emailText) ? undefined : errorMessage;
};

export const required = (errorMessage: string = 'Obrigatório') => {
    return (value: string) => (value?.length > 0 ? undefined : errorMessage);
};

export function composeValidators(
    ...validators: ((value: string) => string | undefined)[]
) {
    const INITIAL_VALUE = undefined;

    return (value: string) =>
        validators.reduce(
            (error, validator) => (error || validator(value)) as any,
            INITIAL_VALUE
        );
}
