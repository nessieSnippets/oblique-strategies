const index = require('./index.js')

global.Math.random = () => 0.5

describe('Get Inspirational Card', () => {
    it('returns a card', () => {
        const card = index.getInspirationCard()
        expect(card).toBe('Don\'t be afraid of things because they\'re easy to do.')
    })
})