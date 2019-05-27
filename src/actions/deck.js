import { DECK } from './types';

export const fetchDeckSuccess = deckJson => {
    const { remaining, deck_id } = deckJson;

    return { type: DECK.FETCH_SUCCESS, remaining, deck_id };
}

export const fetchDeckError = error => {
    return { type: DECK.FETCH_ERROR, message: error.message };
}

export const fetchNewDeck = () => dispatch => {
    return fetch('https://deck-of-cards-api-wrapper.appspot.com/deck/new/shuffle')
        .then(res => {

            if(res.status !== 200) {
                throw new Error('Unsuccessful request to deckofcardsapi.com')
            }

            return res.json()
        })
        .then(json => dispatch(fetchDeckSuccess(json)))
        .catch(err => dispatch(fetchDeckError(err)));
}