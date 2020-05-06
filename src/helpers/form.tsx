import React from 'react';
import { Field } from 'react-final-form';
import { composeValidators } from './validators';
import { TextInput, TextInputProps } from 'react-native';

export function renderInput(
    name: string,
    inputProps: TextInputProps = {},
    validators: ((value: string) => string | undefined)[] = []
) {
    return (
        <Field
            name={name}
            validate={composeValidators(...validators)}
            render={({ input }) => (
                <TextInput
                    value={input.value}
                    onChangeText={input.onChange}
                    {...inputProps}
                />
            )}
        />
    );
}
