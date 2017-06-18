import { flatten, repeat } from 'ramda';

const mockBooks = [{
  title: 'The Man in Black',
  genre: 'romance',
  author: {
    gender: 'female',
    firstName: 'Phoebe',
    surname: 'Overton'
  },
  publishedOn: '2003-02-08'
}, {
  title: 'Possessed by Darkness',
  genre: 'horror',
  author: {
    gender: 'non-binary',
    firstName: 'Krzysztof',
    surname: 'Nowakowski'
  },
  publishedOn: '2013-11-02'
}, {
  title: 'Standing Tall',
  genre: 'non-fiction',
  author: {
    gender: 'male',
    firstName: 'Alex',
    surname: 'Feinberg'
  },
  publishedOn: '2011-11-09'
}];

const initState =  flatten(repeat(mockBooks, 3));

const booksReducer = (state = initState, action = {}) => {
  const { type, payload = {} } = action;

  const actions = {

  };

  return actions[type] || state;
};

export default booksReducer;
