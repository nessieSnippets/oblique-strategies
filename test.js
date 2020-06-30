const index = require('./index.js')

const edition1 = require('./data/edition1.json')
const edition2 = require('./data/edition2.json')
const edition3 = require('./data/edition3.json')
const edition4 = require('./data/edition4.json')

global.Math.random = () => 0.5

describe('Get Inspirational Card (edition 1)', () => {
  it('returns a card', () => {
    const card = index.getInspirationCard(1)
    expect(edition1).toContain(card)
  })
})

describe('Get Inspirational Card (edition 2)', () => {
  it('returns a card', () => {
    const card = index.getInspirationCard(2)
    expect(edition2).toContain(card)
  })
})

describe('Get Inspirational Card (edition 3, default)', () => {
  it('returns a card', () => {
    const card = ind
    ex.getInspirationCard()
    expect(edition3).toContain(card)
  })
})

describe('Get Inspirational Card (edition 4)', () => {
  it('returns a card', () => {
    const card = index.getInspirationCard(4)
    expect(edition4).toContain(card)
  })
})
