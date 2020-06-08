import { SignUpFormValues } from '../../components/sign-up-form/index';
import { User } from '../../types/User';
import AsyncStorage from '@react-native-community/async-storage';
import { getUserKey } from '../../helpers/index';

async function signUp(userCredentials: SignUpFormValues): Promise<User> {
    const { name, email } = userCredentials;
    const errorMessage = 'Email already registered';

    try {
        const key = getUserKey(email);
        const existingUser = await AsyncStorage.getItem(key);
        const stringfiedValue = JSON.stringify(userCredentials);

        if (!existingUser) {
            await AsyncStorage.setItem(key, stringfiedValue);
        } else {
            throw undefined;
        }

        return { name, email };
    } catch {
        return Promise.reject(errorMessage);
    }
}

export default { signUp };
