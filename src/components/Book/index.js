import React from 'react';
import { Col, Panel, Row } from 'react-bootstrap';

import './book.css';

const authorName = ({ firstName, surname }) => `${firstName} ${surname}`;
const authorGender = ({ gender }) => gender.substring(0, 1).toUpperCase();

const coverSrc = (genre) => require(`../../../public/covers/${genre}.jpg`);

const header = (title, author, publishedOn) => (
  <Row className="book__header">
    <Col xs={12}>
      <span className="book__title">{title}</span>
    </Col>
    <Col xs={12}>
      <span className="book__author">
        by {authorName(author)} ({authorGender(author)})
      </span>
    </Col>
    <Col xs={12}>
      <span className="book__published">
        published: {publishedOn}
      </span>
    </Col>
  </Row>
);

const Book = ({ title, genre, author, publishedOn }) => (
  <Panel className="book" header={header(title, author, publishedOn)}>
    <Row className="book__detail">
      <Col xs={12}>
        <img alt={title} src={coverSrc(genre)} />
      </Col>
    </Row>
    <div className="book__offer">Special Offer</div>
  </Panel>
);

export default Book;
