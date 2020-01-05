#!/usr/bin/env node
const cards = require('./index')

const input = process.argv[2]

if (input === 'help') {
    console.log('To get a random card, type "oblique-strategies".')
} else {
    console.log(cards.getInspirationCard())
}