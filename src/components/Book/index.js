import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

import Gender from '../Gender';
import { bookType } from '../../lib/types';

import './book.css';

// get a "random" image that's always the same for any given book
export const getIndex = (publishedOn) => new Date(publishedOn).getTime().toString().split('')[3];

const getCover = ({ genre, publishedOn }) => require(`../../../public/covers/${genre}/${getIndex(publishedOn)}.jpg`);

const authorName = ({ firstName, surname }) => `${firstName} ${surname}`;

const Book = (props) => {
  const { title, genre, author, publishedOn } = props;

  return (
    <Col xs={12} sm={6} md={4} lg={3} className="book">
      <Row className="book__detail text-center">
        <Col xs={12}>
          <Image alt={title} src={getCover(props)} className="book__cover center-block" responsive />
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
};

Book.propTypes = bookType;

export default Book;
