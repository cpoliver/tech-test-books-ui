import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';

import Book from '../Book';
import { bookShape } from '../../lib/types';

import './book-list.css';

const BookList = ({ books }) => (
  <Row className="book-list">
    {books.map((book) => <Book key={book._id} {...book} />)}
  </Row>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(bookShape).isRequired
};

export default BookList;
