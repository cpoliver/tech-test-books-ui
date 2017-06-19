import React from 'react';
import { Col } from 'react-bootstrap';

import Book from '../Book';

const BookList = ({ books }) => (
  <div>
    {books.map((book) => <Book {...book} />)}
  </div>
);

export default BookList;
