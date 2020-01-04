const index = require('./index.js')

global.Math.random = () => 0.5

describe('Get Inspirational Card', () => {
    it('returns brian eno card when no parameter passed', () => {
        const card = index.getInspirationCard('brianEno')
        expect(card).toBe('How would you have done it?')
    })

    it('returns brian eno card when eno is specified', () => {
        const card = index.getInspirationCard('brianEno')
        expect(card).toBe('How would you have done it?')
    })

    it('returns original card when originals is specified', () => {
        const card = index.getInspirationCard('original')
        expect(card).toBe('What would your closest friend do?')
    })
})