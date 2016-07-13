'use strict';

import ReactDom from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import store from './store/index';
import CountButton from './components/CountButton';

let app = (
    <Provider store = {store}>
        <CountButton />
    </Provider>
);

ReactDom.render(
    app,
    document.getElementById('app')
)
