const cards = [
  require('./data/edition1.json'),
  require('./data/edition2.json'),
  require('./data/edition3.json'),
  require('./data/edition4.json')
]

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

const getInspirationCard = (edition = 3) => {
  cardsList = cards[edition - 1]
  const randomIndex = getRandomInt(cardsList.length)
  return cardsList[randomIndex]
}

module.exports = {
  getInspirationCard
}
