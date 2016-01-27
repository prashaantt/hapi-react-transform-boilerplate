import 'babel-polyfill';
import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { render } from 'react-dom';


import counterReducer from '../screens/Counter/reducer';
import routes from '../routes';
import { initCounter as bootstrapAction } from '../screens/Counter/actions';


const history = createBrowserHistory();
const reducer = combineReducers({ counter: counterReducer });
const store = createStore(reducer, window.__INITIAL_STATE__);


if (!window.env || window.env === 'development') {
    store.dispatch(bootstrapAction());
}


render(
    <Provider store={ store }>
        <Router routes={ routes } history={ history } />
    </Provider>,
    document.getElementById('react-root')
);
