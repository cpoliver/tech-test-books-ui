import axios from 'axios';

const SERVER_URL = 'https://tech-test-books.herokuapp.com'; // 'http://localhost:5000';

export const fetchBooks = (queryString) => axios.get(`${SERVER_URL}/books?${queryString}`);

export const fetchTotal = (queryString) => axios.get(`${SERVER_URL}/books/count?${queryString}`);

export const addBooks = (totalToAdd) => axios.post(`${SERVER_URL}/admin/add-books/${totalToAdd}`);

export const deleteAllBooks = () => axios.delete(`${SERVER_URL}/admin/delete-all-books`);
