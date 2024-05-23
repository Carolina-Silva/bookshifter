import axios from './axiosConfig';

export const registerUser = (userData) => {
    return axios.post('/register', userData);
};


export const loginUser = (credentials) => {
    return axios.post('/login', credentials);
};

