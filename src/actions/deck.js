import { DECK } from './types';

export const fetchDeckSuccess = deckJson => {
    const { remaining, deck_id } = deckJson;

    return { type: DECK.DECK_FETCH_SUCCESS, remaining, deck_id };
}

export const fetchNewDeck = () => dispatch => {
   return fetch('https://deck-of-cards-api-wrapper.appspot.com/deck/new/shuffle')
        .then(res => res.json())
        .then(json => dispatch(fetchDeckSuccess(json)));
}