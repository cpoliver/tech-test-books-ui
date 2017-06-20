import React from 'react';
import { Col, Pagination, Row } from 'react-bootstrap';

import Book from '../Book';

const BookList = ({ books, searchParams, totalPages, updateSearchParams }) => {
  const { page } = searchParams;

  return (
    <div>
      <Row>
        {books.map((book) => <Book key={book._id} {...book} />)}
      </Row>
      <Row>
        <Col xs={12} className="text-center">
          <Pagination prev next first last ellipsis boundaryLinks
            items={totalPages}
            maxButtons={5}
            activePage={page}
            onSelect={(newPage) => updateSearchParams({ page: newPage })} />
        </Col>
      </Row>
    </div>
  );
}

export default BookList;
