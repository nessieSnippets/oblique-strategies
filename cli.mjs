#!/usr/bin/env node

import { createRequire } from 'node:module';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getInspirationCard } from './index.js';

const { version } = createRequire(import.meta.url)('./package.json');

const argv = yargs(hideBin(process.argv))
  .usage('Usage: $0 -e [edition]')

  .option('e')
  .alias('e', 'edition')
  .default('e', 3)
  .describe('e', 'The deck edition to pull from')

  .help('h')
  .alias('h', 'help')
  .version(version)
  .alias('v', 'version')

  .example('$0', 'Get a random strategy from deck, edition 3')
  .example('$0 -e 1', 'Get a random strategy from deck, edition 1').argv;

console.log(getInspirationCard(argv.edition));
