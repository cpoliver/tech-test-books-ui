import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { complement, isEmpty } from 'ramda';
import seedrandom from 'seedrandom';

import Gender from '../Gender';
import Offer from '../Offer';
import { getBestOffer } from '../../lib/offers';
import { bookType } from '../../lib/types';

import './book.css';

const getIndex = (id) => Math.floor(seedrandom(id)() * 10);
const getCover = ({ genre, _id }) => require(`../../../public/covers/${genre}/${getIndex(_id)}.jpg`);

const Book = (props) => {
  const { title, genre, author, publishedOn } = props;

  const offer = getBestOffer(props);
  const offerExists = complement(isEmpty)(offer);

  return (
    <Col xs={12} sm={6} md={4} lg={3} className="book">
      <Row className="book__detail text-center">
        <Col xs={12}>
          {offerExists && <Offer {...offer} />}
          <Image alt={title} src={getCover(props)} className="book__cover center-block" responsive />
        </Col>
        <Col xs={12}>
          <span className="book__title">{title}</span>
        </Col>
        <Col xs={12}>
          <span className="book__author">
            {`${author.firstName} ${author.surname}`}&nbsp;
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
