import {
  allPass, endsWith, equals, filter, last, omit, pipe, prop, propEq, propSatisfies, sortBy
} from 'ramda';

import { DAYS_OF_WEEK } from './constants';

const getDay = (dateString) => new Date(dateString).getDay();
const getDayName = (dateString) => DAYS_OF_WEEK[getDay(dateString)];

const isGenre = propEq('genre');
const isHalloween = endsWith('10-31');
const isDay = (dayName) => pipe(getDayName, equals(dayName));

const isLastOfMonth = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth();

  return month < new Date(date.setDate(date.getDate() + 7)).getMonth();
};

const publishedOnHalloween = propSatisfies(isHalloween, 'publishedOn');
const publishedOnDay = (dayName) => propSatisfies(isDay(dayName), 'publishedOn');
const publishedOnLastDayOfMonth = propSatisfies(isLastOfMonth, 'publishedOn');

const offers = [{
  name: 'spooky savings',
  description: `off any horror books published on Halloween`,
  discount: 0.15,
  criteria: allPass([
    isGenre('horror'),
    publishedOnHalloween
  ])
}, {
  name: 'fab fridays',
  description: 'off any book published on the last Friday of the month',
  discount: 0.05,
  criteria: allPass([
    publishedOnDay('friday'),
    publishedOnLastDayOfMonth
  ])
}];

export const getBestOffer = (book) => pipe(
  filter(({ criteria }) => criteria(book)),
  sortBy(prop('discount')),
  last,
  omit(['criteria'])
)(offers);
