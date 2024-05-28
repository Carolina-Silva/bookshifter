import { loginUser, registerUser } from '../requests/user';
import Cookies from 'js-cookie';


export const handleLoginSubmit = async (credentials, setAlertMessage) => {
    try {
        const response = await loginUser(credentials);
        console.log('Login successful:', response.data);
        
        // Save the token in cookies
        const token = response.data.token;
        Cookies.set('authToken', token, { expires: 7 });
        
        return response.data;
    } catch (error) {
        console.error('Login failed:', error);
        if (error.response && error.response.data) {
            setAlertMessage(error.response.data.message);
        }
        return null;
    }
};


export const handleRegisterSubmit = async (userData, setAlertMessage) => {
    try {
        const response = await registerUser(userData);
        console.log('Registration successful:', response.data);
        return response.data;
    } catch (error) {
        console.error('Registration failed:', error);
        if (error.response && error.response.data) {
            setAlertMessage(error.response.data.message);
        }
        return null;
    }
};
