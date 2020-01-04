const cardsList = require('./data/cards.json')

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}

const getCardsListSection = (section) => {
    let cards
    if (section === 'all') {
        cards = [
            ...cardsList.david, ...cardsList.original, ...cardsList.casey, ...cardsList.brianEno,
            ...cardsList.pete
        ]
    } else {
        cards = cardsList[section]
    }
    return cards
}

const getInspirationCard = (section = 'brianEno') => {
    const cards = getCardsListSection(section)
    const randomIndex = getRandomInt(cards.length)
    return cards[randomIndex]
}

module.exports = {
    getInspirationCard
};