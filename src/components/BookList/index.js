import React from 'react';
import { Col, Pagination, Row } from 'react-bootstrap';

import Book from '../Book';

const BookList = ({ books, totalBooks, itemsPerPage, page, loadMoreBooks }) => (
  <div>
    <Row>
      {books.map((book) => <Book key={book._id} {...book} />)}
    </Row>
    <Row>
      <Col xs={12} className="text-center">
        <Pagination prev next first last ellipsis boundaryLinks
          items={Math.ceil(totalBooks / itemsPerPage)}
          maxButtons={5}
          activePage={page}
          onSelect={(selectedPage) => loadMoreBooks({ itemsPerPage, page: selectedPage })} />
      </Col>
    </Row>
  </div>
);

export default BookList;
