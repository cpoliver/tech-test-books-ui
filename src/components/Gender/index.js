import React from 'react';
import { Image } from 'react-bootstrap';

const Gender = ({ gender }) => {
  const src = require(`./icons/${gender}.svg`);
  return <Image src={src} alt={gender} className="gender-icon" />;
};

export default Gender;
