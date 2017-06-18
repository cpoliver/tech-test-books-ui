import { combineReducers } from 'redux';

export default combineReducers({
  books:  [{
    title: 'The Journey',
    genre: 'adventure',
    author: {
      gender: 'male',
      firstName: 'Johnny',
      surname: 'Bojangles'
    },
    publishedOn: '2012-07-21T22: 00: 00.000Z'
  }, {
    title: 'Imp of Autumn',
    genre: 'fantasy',
    author: {
      gender: 'female',
      firstName: 'Sophia',
      surname: 'Smith'
    },
    publishedOn: '1991-04-14T22: 00: 00.000Z'
  }, {
    title: 'The Devil\'s Doorstop',
    genre: 'horror',
    author: {
      gender: 'non-binary',
      firstName: 'Ashley',
      surname: 'Overton'
    },
    publishedOn: '2003-11-02T22: 00: 00.000Z'
  }]
});
