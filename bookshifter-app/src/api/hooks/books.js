import { getAllBooks, getBookById, addBook, deleteBook, searchBooks, getUserBooks } from '../requests/books';


export const fetchAllBooks = async () => {
  try {
    const response = await getAllBooks();
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const fetchBookById = async (id) => {
  try {
    const response = await getBookById(id);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const createBook = async (bookData, isbn, fatecId) => {
  try {
    const response = await addBook(bookData, isbn, fatecId);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const removeBook = async (id) => {
  try {
    await deleteBook(id);
    return null;
  } catch (error) {
    handleRequestError(error);
  }
};

export const searchForBooks = async (query) => {
  try {
    const response = await searchBooks(query);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const fetchUserBooks = async () => {
  try {
    const response = await getUserBooks();
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

const handleRequestError = (error) => {
  console.error('Request failed:', error);
  if (error.response && error.response.data) {
    return error.response.data.message;
  }
};

