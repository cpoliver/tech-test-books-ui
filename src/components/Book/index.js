import React from 'react';
import { Col, Panel, Row } from 'react-bootstrap';

import './book.css';

const authorName = ({ firstName, surname }) => `${firstName} ${surname}`;
const authorGender = ({ gender }) => gender.substring(0, 1).toUpperCase();

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const coverSrc = (genre) => require(`../../../public/covers/${genre}/${randomInt(0, 9)}.jpg`);

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
  <Col xs={12} sm={6} md={4} lg={3} className="app__book">
    <Panel className="book" header={header(title, author, publishedOn)}>
      <Row className="book__detail">
        <Col xs={12}>
          <img alt={title} src={coverSrc(genre)} />
        </Col>
      </Row>
      <div className="book__offer">Special Offer</div>
    </Panel>
  </Col>
);

export default Book;
