import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

import Gender from '../Gender';
import { bookType } from '../../lib/types';

import './book.css';

const authorName = ({ firstName, surname }) => `${firstName} ${surname}`;

// stupid way of getting a "random" image that's always the same for any given book
const index = (publishedOn) => new Date(publishedOn).getTime().toString().split('')[3];
const coverSrc = (genre, publishedOn) => require(`../../../public/covers/${genre}/${index(publishedOn)}.jpg`);

const Book = ({ title, genre, author, publishedOn }) => (
  <Col xs={12} sm={6} md={4} lg={3} className="book">
    <Row className="book__detail text-center">
      <Col xs={12}>
        <Image alt={title} src={coverSrc(genre, publishedOn)} className="book__cover center-block" responsive />
      </Col>
      <Col xs={12}>
        <span className="book__title">{title}</span>
      </Col>
      <Col xs={12}>
        <span className="book__author">
          {authorName(author)}&nbsp;
          <div className="book__gender"><Gender gender={author.gender} /></div>
        </span>
      </Col>
      <Col xs={12}>
        <span className="book__published">{publishedOn}</span>
        &nbsp;<small className="book__bullet">&bull;</small>&nbsp;
        <span className="book__genre">{genre}</span>
      </Col>
    </Row>
  </Col>
);

Book.propTypes = bookType;

export default Book;
