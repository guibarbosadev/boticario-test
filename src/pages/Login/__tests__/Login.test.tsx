import React from 'react';
import LoginPage, { LoginPageProps } from '..';
import { render, fireEvent } from 'react-native-testing-library';

describe('Login | Page', () => {
    it('renders without breaking', () => {
        const props: LoginPageProps = {} as any;
        render(<LoginPage {...props} />);
    });

    it("calls prosps.navigation.navigate() when clicks 'cadastre-se' text", () => {
        const props: LoginPageProps = {
            navigation: {
                navigate: jest.fn()
            }
        } as any;
        const { getByText } = render(<LoginPage {...props} />);
        const signUpLinkText = 'Cadastre-se';
        const signUpLink = getByText(signUpLinkText);
        const signUpPageName = 'SignUp';

        expect(props.navigation.navigate).toHaveBeenCalledTimes(0);

        fireEvent.press(signUpLink);
        expect(props.navigation.navigate).toHaveBeenCalledTimes(1);
        expect(props.navigation.navigate).toHaveBeenCalledWith(signUpPageName);
    });
});
