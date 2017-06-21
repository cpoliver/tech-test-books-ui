import React from 'react';
import { Image } from 'react-bootstrap';

import { genderType } from '../../lib/types';

const Gender = ({ gender }) => {
  const src = require(`./icons/${gender}.svg`);
  return <Image src={src} alt={gender} className="gender-icon" />;
};

Gender.propTypes = {
  gender: genderType
};

export default Gender;
