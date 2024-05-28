import axios from './axiosConfig';

// Obter todos os livros
export const getAllBooks = () => {
    return axios.get('/books');
};

// Obter livro por ID
export const getBookById = (id) => {
    return axios.get(`/books/${id}`);
};

// Adicionar um novo livro (com parâmetros de ISBN e fatecId na URL)
export const addBook = (bookData, isbn, fatecId) => {
    const a = axios.post(`/books?isbn=${isbn}&fatecId=${fatecId}`, bookData);
    console.log(a)
    return a
};

// Deletar um livro por ID
export const deleteBook = (id) => {
    return axios.delete(`/books/${id}`);
};

// Buscar livros por query
export const searchBooks = (query) => {
    return axios.get(`/books/search?query=${query}`);
};

// Obter livros do usuário
export const getUserBooks = () => {
    return axios.get('/user/books');
};