import React from 'react';
import { Col } from 'react-bootstrap';

import Book from '../Book';

const BookList = ({ books }) => (
  <div>
  {
    books.map(
      (book) => (
        <Col xs={12} sm={6} md={4} lg={3} className="app__book">
          <Book {...book} />
        </Col>
      )
    )
  }
  </div>
);

export default BookList;
