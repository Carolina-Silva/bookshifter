import axios from './axiosConfig';

export const login = (credentials) => {
    return axios.post('/auth/login', credentials);
};

export const register = (userData) => {
    return axios.post('/auth/register', userData);
};
