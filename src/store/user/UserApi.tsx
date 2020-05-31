import { SignUpFormValues } from '../../components/sign-up-form/index';
import { User } from '../../types/User';

function signUp(userCredentials: SignUpFormValues): Promise<User> {
    const { name, email } = userCredentials;

    return Promise.resolve({ name, email });
}

export default { signUp };
