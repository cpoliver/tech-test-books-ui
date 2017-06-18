import { repeat } from 'ramda';

const mockBook = {
  title: 'The Devil\'s Doorstop',
  genre: 'horror',
  author: {
    gender: 'non-binary',
    firstName: 'Ashley',
    surname: 'Overton'
  },
  publishedOn: '2003-11-02'
};

const initState =  repeat(mockBook, 24);

const booksReducer = (state = initState, action = {}) => {
  const { type, payload = {} } = action;

  const actions = {

  };

  return actions[type] || state;
};

export default booksReducer;
