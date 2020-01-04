#!/usr/bin/env node
const cards = require('./index')

console.log(cards.getInspirationCard(process.argv[2]))