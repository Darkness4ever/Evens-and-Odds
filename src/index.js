 import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './reducer'
import './index.css';

const store = createStore(rootReducer , applyMiddleware(thunk));

console.log('store ', store)
console.log('store.getState()', store.getState())

store.subscribe(() => console.log('store.getState()', store.getState()))



// const action1 = startGame();
// store.dispatch(startGame());
// store.dispatch(expandInstructions());
// store.dispatch(cancelGame());
// store.dispatch(collapseInstructions());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

