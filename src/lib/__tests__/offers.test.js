import { getBestOffer } from '../offers';

const halloweenOnTuesday = '2017-10-31';
const halloweenOnFriday = '2014-10-31';
const lastFridayOfMonth = '2017-06-30';
const firstFridayOfMonth = '2017-06-02';

const spookySavings = {
  name: 'spooky savings',
  description: 'off any horror books published on Halloween',
  discount: 0.15
};

const fabFridays = {
  name: 'fab fridays',
  description: 'off any book published on the last Friday of the month',
  discount: 0.05
};

describe('lib/offers', () => {
  describe('getBestOffer', () => {
    it('should return an empty array when no criteria are met', () => {
      const book = { publishedOn: firstFridayOfMonth, genre: 'adventure' };

      expect(getBestOffer(book)).toEqual({});
    });

    it('should return the spooky savings offer when applicable', () => {
      const book = { publishedOn: halloweenOnTuesday, genre: 'horror' };

      expect(getBestOffer(book)).toEqual(spookySavings);
    });

    it('should return the fab fridays offer applicable', () => {
      const book = { publishedOn: lastFridayOfMonth, genre: 'horror' };

      expect(getBestOffer(book)).toEqual(fabFridays);
    });

    it('should return the first offer with the largest discount when multiple criteria are met', () => {
      const book = { publishedOn: halloweenOnFriday, genre: 'horror' };

      expect(getBestOffer(book)).toEqual(spookySavings);
    });
  });
});
