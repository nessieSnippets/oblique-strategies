const { execFileSync, spawnSync } = require('node:child_process');
const { buildSync } = require('esbuild');
const { getInspirationCard } = require('./index.js');

const edition1 = require('./data/edition1.json');
const edition2 = require('./data/edition2.json');
const edition3 = require('./data/edition3.json');
const edition4 = require('./data/edition4.json');

global.Math.random = () => 0.5;

describe('Get Inspirational Card (edition 1)', () => {
  it('returns a card', () => {
    const card = getInspirationCard(1);
    expect(edition1).toContain(card);
    expect(card).toEqual('Infinitesimal gradations');
  });
});

describe('Get Inspirational Card (edition 2)', () => {
  it('returns a card', () => {
    const card = getInspirationCard(2);
    expect(edition2).toContain(card);
    expect(card).toEqual(
      'In total darkness, or in a very large room, very quietly',
    );
  });
});

describe('Get Inspirational Card (edition 3, default)', () => {
  it('returns a card', () => {
    const card = getInspirationCard();
    expect(edition3).toContain(card);
    expect(card).toEqual('Into the impossible');
  });
});

describe('Get Inspirational Card (edition 4)', () => {
  it('returns a card', () => {
    const card = getInspirationCard(4);
    expect(edition4).toContain(card);
    expect(card).toEqual('Listen to the quiet voice');
  });
});

describe.each([[5], [0], ['abc'], [null]])(
  'Invalid edition (%j)',
  (edition) => {
    it('throws a clear error', () => {
      expect(() => getInspirationCard(edition)).toThrow('edition must be 1–4');
    });
  },
);

describe('CLI', () => {
  const runCli = (...args) =>
    spawnSync(process.execPath, ['cli.mjs', ...args], { encoding: 'utf8' });

  it('prints a card from the requested edition', () => {
    const { status, stdout } = runCli('-e', '4');
    expect(status).toBe(0);
    expect(edition4).toContain(stdout.trim());
  });

  it('defaults to edition 3 when none provided', () => {
    const { status, stdout } = spawnSync(
      process.execPath,
      // Separate process than jest, so we have to override Math.random here as well
      ['--import', 'data:text/javascript,Math.random=()=>0.5', 'cli.mjs'],
      { encoding: 'utf8' },
    );
    expect(status).toBe(0);
    expect(stdout.trim()).toBe('Into the impossible');
  });

  it.each([['5'], ['0'], ['abc']])('rejects edition %s', (edition) => {
    const { status, stdout, stderr } = runCli('-e', edition);
    expect(status).toBe(1);
    expect(stdout).toBe('');
    expect(stderr.trim()).toBe('edition must be 1–4');
  });
});

describe('Browser ESM bundle', () => {
  it('runs in strict mode', () => {
    const entry = `
      import { getInspirationCard } from './index.js';
      console.log(JSON.stringify(getInspirationCard(4)));
    `;
    const { outputFiles } = buildSync({
      stdin: { contents: entry, resolveDir: __dirname },
      bundle: true,
      format: 'esm',
      platform: 'browser',
      write: false,
    });
    const output = execFileSync(process.execPath, ['--input-type=module'], {
      input: outputFiles[0].text,
      encoding: 'utf8',
    });
    expect(edition4).toContain(JSON.parse(output));
  });
});
