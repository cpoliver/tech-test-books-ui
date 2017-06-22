export const ITEMS_PER_PAGE_OPTIONS = [8, 16, 24, 32, 64];

export const GENDERS = [ 'All', 'Female', 'Male', 'Non-Binary' ];

export const GENRES = [
  'Adventure',
  'Children',
  'Drama',
  'Fantasy',
  'Horror',
  'Humor',
  'Mystery',
  'Non-Fiction',
  'Romance',
  'Sci-Fi'
];

export const GENDERS_LOWERCASE = GENDERS.map(s => s.toLowerCase());

export const GENRES_LOWERCASE = GENRES.map(s => s.toLowerCase());

export const DAYS_OF_WEEK = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday'
];

export const SORTABLE_PROPERTIES = [
  'author.gender',
  'author.firstName',
  'author.surname',
  'genre',
  'publishedOn'
];
