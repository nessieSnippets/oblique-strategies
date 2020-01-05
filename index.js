const cardsList = require('./data/cards.json')

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}

const getInspirationCard = () => {
    const randomIndex = getRandomInt(cardsList.length)
    return cardsList[randomIndex]
}

module.exports = {
    getInspirationCard
};