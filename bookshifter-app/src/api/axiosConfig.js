import axios from 'axios';
import { createBrowserHistory } from 'history';

const axiosInstance = axios.create({
    baseURL: 'url',
});

const history = createBrowserHistory();

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

// Função para configurar o alert handler
export const setAlertHandler = handler => {
    showAlert = handler;
};

export default axiosInstance;
