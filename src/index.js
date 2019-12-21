import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { searchRobots, requestRobots } from './reducers';
import thunkMiddleWare  from 'redux-thunk';


//Creates a middleware logger to see Redux Action Types, Payload, etc in the console to help debug
const logger = createLogger();

//Using combineReducers function to combine both reducers. Straight forward enough.
const rootReducer = combineReducers({ searchRobots, requestRobots })

//Create store. Pass it the reducer(s) and also the function applyMiddleWare() with the logger and thunk passed in
const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
