const cards = [
  require('./data/edition1.json'),
  require('./data/edition2.json'),
  require('./data/edition3.json'),
  require('./data/edition4.json'),
];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const getDeck = (edition) => {
  const deck = cards[edition - 1];
  if (!deck) {
    throw new Error('edition must be 1–4');
  }
  return deck;
};

const getInspirationCard = (edition = 3) => {
  const deck = getDeck(edition);
  return deck[getRandomInt(deck.length)];
};

module.exports = {
  getInspirationCard,
};
