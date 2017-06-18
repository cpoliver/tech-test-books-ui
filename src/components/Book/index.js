import React, { Component } from 'react';
import './book.css';

const Book = () => (
  <div className="book">
    <div className="book__title">
      <span>Title</span>
    </div>
    <div className="book__author">
      <span>Author</span>
      <span>Gender Symbol</span>
    </div>
    <div className="book__published">
      <span>Publish Date</span>
    </div>
    <div className="book__detail">
      <div>Book Icon</div>
      <div>Special Offer</div>
    </div>
  </div>
);

export default Book;
