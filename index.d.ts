/** Returns the deck editions that can be selected. */
export function getEditions(): number[];

/**
 * Returns a random card from a deck.
 * @param edition The deck edition. Defaults to 3.
 * @throws If the edition does not exist.
 */
export function getInspirationCard(edition?: number): string;

/**
 * Returns every card in a deck.
 * @param edition The deck edition. Defaults to 3.
 * @throws If the edition does not exist.
 */
export function getAllInspirationCards(edition?: number): string[];
