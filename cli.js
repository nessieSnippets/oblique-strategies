#!/usr/bin/env node

const yargs = require('yargs');
const { getInspirationCard } = require('./index');

const argv = yargs
  .usage('Usage: $0 -e [edition]')

  .option('e')
  .alias('e', 'edition')
  .default('e', 3)
  .describe('e', 'The deck edition to pull from')

  .help('h')
  .alias('h', 'help')
  .alias('v', 'version')

  .example('$0', 'Get a random strategy from deck, edition 3')
  .example('$0 -e 1', 'Get a random strategy from deck, edition 1').argv;

console.log(getInspirationCard(argv.edition));
