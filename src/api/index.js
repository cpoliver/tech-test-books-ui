import axios from 'axios';

const SERVER_URL = 'http://localhost:5000'; // TODO: Make dynamic & document how to change

export const fetchBooks = (queryString) => {
  return axios.get(`${SERVER_URL}/books?${queryString}`);
};

export const fetchTotal = (queryString) => {
  return axios.get(`${SERVER_URL}/books/count?${queryString}`);
};
