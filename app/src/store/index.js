'use strict';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { delayMiddleware } from '../middlewares/delayMiddleware';
import { clickReducer } from '../reducers/clickReducer';

let createStoreWithMiddleware = applyMiddleware(delayMiddleware)(createStore);

let reducers = combineReducers({
    clickReducer
});

export default createStoreWithMiddleware(reducers);
