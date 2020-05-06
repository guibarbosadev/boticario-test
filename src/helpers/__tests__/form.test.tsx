import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import { renderInput } from '../form';
import { Form } from 'react-final-form';

describe('Form | Helpers', () => {
    it('renderInput method returns as expected', () => {
        const Input = () => renderInput('some-name');
        const { toJSON } = render(
            <Form onSubmit={() => {}} render={() => <Input />} />
        );

        expect(toJSON()).toMatchSnapshot();
    });

    it('renderInput method uses input.value', () => {
        const props = { value: 'some value' };
        const Input = () => renderInput('some-name', props);
        const { getByDisplayValue } = render(
            <Form onSubmit={() => {}} render={() => <Input />} />
        );

        expect(getByDisplayValue(props.value)).toBeTruthy();
    });

    it('renderInput method uses input.placeholder', () => {
        const props = { placeholder: 'Some placeholder' };
        const Input = () => renderInput('some-name', props);
        const { queryByPlaceholder } = render(
            <Form onSubmit={() => {}} render={() => <Input />} />
        );

        expect(queryByPlaceholder(props.placeholder)).toBeTruthy();
    });

    it('input values changes when users types something', () => {
        const value = 'Some value';
        const Input = () => renderInput('some-name', { testID: 'my-input' });
        const { getByTestId, queryByDisplayValue } = render(
            <Form onSubmit={() => {}} render={() => <Input />} />
        );

        fireEvent.changeText(getByTestId('my-input'), value);
        expect(queryByDisplayValue(value)).toBeTruthy();
    });
});
