import axios from './axiosConfig';

export const getAllBooks = () => {
    return axios.get('/books');
};

export const getBookById = (id) => {
    return axios.get(`/books/${id}`);
};

export const addBook = (bookData) => {
    return axios.post('/books', bookData);
};

export const deleteBook = (id) => {
    return axios.delete(`/books/${id}`);
};
