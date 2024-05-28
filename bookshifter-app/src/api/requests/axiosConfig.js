import axios from 'axios';
import { createBrowserHistory } from 'history';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
});

const history = createBrowserHistory();

axiosInstance.interceptors.request.use(
    config => {
        const token = Cookies.get('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log(config)
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


axiosInstance.interceptors.response.use(
    response => response,
    error => {
        const { response } = error;

        if (response.status === 403) {
            history.push('/login');
        } else if (response.status === 500) {
            history.push('/error');
        } else if (response.data && response.data.message) {
            showAlert(response.data.message);
        }

        return Promise.reject(error);
    }
);

let showAlert = message => {};

export const setAlertHandler = handler => {
    showAlert = handler;
};

export default axiosInstance;
