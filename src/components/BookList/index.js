import React from 'react';
import PropTypes from 'prop-types';
import { Col, Pagination, Row } from 'react-bootstrap';

import Book from '../Book';
import { bookShape, searchParamsType } from '../../lib/types';

import './book-list.css';

const BookList = ({ books, searchParams, totalPages, updateSearchParams }) => {
  const { page } = searchParams;

  return (
    <Row className="book-list">
      <Row className="book-list__grid">
        {books.map((book) => <Book key={book._id} {...book} />)}
      </Row>
      <Row className="book-list__pagination">
        <Col xs={12} className="text-center">
          <Pagination prev next first last ellipsis boundaryLinks
            items={totalPages}
            maxButtons={5}
            activePage={page}
            onSelect={(newPage) => updateSearchParams({ page: newPage })} />
        </Col>
      </Row>
    </Row>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(bookShape).isRequired,
  searchParams: searchParamsType.isRequired,
  totalPages: PropTypes.number.isRequired,
  updateSearchParams: PropTypes.func.isRequired
};

export default BookList;
