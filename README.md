# Oblique Strategies

![CI status](https://github.com/nessieSnippets/oblique-strategies/actions/workflows/ci.yaml/badge.svg)

[Oblique strategies](https://en.wikipedia.org/wiki/Oblique_Strategies) aims to promote creativity by offering a "challenging constraint". The cards were created by Brian Eno and Peter Schmidt.

This package returns an oblique strategies card , using lists made by [SansUmbrella](https://github.com/sansumbrella/Processing-ObliqueStrategies).

## Requirements

Node.js >=22.12

## Command line

Run without installing:

```
>> npx @nessiesnippets/oblique-strategies #prints random card

>> npx @nessiesnippets/oblique-strategies -e 1 #prints random card from edition 1
```

Or install it globally:

```
>> npm install -g @nessiesnippets/oblique-strategies

>> oblique-strategies #prints random card

>> oblique-strategies --help #prints help message
```

## Use in your project

```
>> npm install @nessiesnippets/oblique-strategies
```

With `import`:

```js
import {
  getEditions,
  getInspirationCard,
  getAllInspirationCards,
} from '@nessiesnippets/oblique-strategies';

getEditions(); // [1, 2, 3, 4]
getInspirationCard(); // a random card from edition 3
getInspirationCard(1); // a random card from edition 1
getAllInspirationCards(); // every card in edition 3
getAllInspirationCards(1); // every card in edition 1
```

With `require`:

```js
const { getInspirationCard } = require('@nessiesnippets/oblique-strategies');

getInspirationCard();
```

`getInspirationCard` and `getAllInspirationCards` throw an error if the edition does not exist.

## Editions

Each edition of the deck has a different set of cards. This package includes the first four [editions](https://en.wikipedia.org/wiki/Oblique_Strategies#Editions_and_variations). If no edition is selected, it defaults to edition 3.

| Edition      | Year |
| ------------ | ---- |
| 1 (original) | 1975 |
| 2            | 1978 |
| 3            | 1979 |
| 4            | 1996 |

## License

The code in this repository is available under the [MIT License](LICENSE).

This license does not include the text of the cards. The cards are the work of Brian Eno and Peter Schmidt, and this repository acknowledges them as its authors. No rights to the card text are granted here.

## References & Notes

- [Oblique Strategies on Wikipedia](https://en.wikipedia.org/wiki/Oblique_Strategies)

- [Cards list](https://github.com/sansumbrella/Processing-ObliqueStrategies/blob/master/src/com/sansumbrella/StrategyList.java)

- Cautionary Tales - [Bowie, Jazz and the Unplayable Piano](http://timharford.com/articles/cautionarytales/)
