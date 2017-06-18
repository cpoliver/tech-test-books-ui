import React from 'react';
import { Col, Row } from 'react-bootstrap';

import './book.css';

const authorName = ({ firstName, surname }) => `${firstName} ${surname}`;
const authorGender = ({ gender }) => gender.substring(0, 1).toUpperCase();

const Book = ({ title, genre, author, publishedOn }) => (
  <div className="book">
    <Row className="book__title">
      <Col xs={12}>
        <span>{title}</span>
      </Col>
    </Row>
    <Row className="book__author">
      <Col xs={12}>
        <span>{authorName(author)} {authorGender(author)}</span>
      </Col>
    </Row>
    <Row className="book__published">
      <Col xs={12}>
        <span>{publishedOn}</span>
      </Col>
    </Row>
    <Row className="book__detail">
      <Col xs={12}>
        <span>{genre}</span>
      </Col>
    </Row>
    <div className="book__offer">Special Offer</div>
  </div>
);

export default Book;
