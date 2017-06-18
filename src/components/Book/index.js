import React from 'react';
import { Col, Panel, Row } from 'react-bootstrap';

import './book.css';

const authorName = ({ firstName, surname }) => `${firstName} ${surname}`;
const authorGender = ({ gender }) => gender.substring(0, 1).toUpperCase();

const header = (title, author) => (
  <Row className="book__header">
    <Col xs={12}>
      <span className="book__title">{title}</span>
    </Col>
    <Col xs={12}>
      <span className="book__author">
        <em>by {authorName(author)}</em> ({authorGender(author)})
      </span>
    </Col>
  </Row>
);

const Book = ({ title, genre, author, publishedOn }) => (
  <Panel className="book" header={header(title, author)}>
    <Row className="book__detail">
      <Col xs={12}>
        <span>{genre}</span>
      </Col>
      <Col xs={12}>
        <span><em>published: {publishedOn}</em></span>
      </Col>
    </Row>
    <div className="book__offer">Special Offer</div>
  </Panel>
);

export default Book;
