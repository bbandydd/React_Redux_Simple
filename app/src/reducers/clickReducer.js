'use strict';

import { app } from '../constants/appConstant';

const initState = {
    clickCount: 0
};

export let clickReducer = (state = initState, action) => {
    switch (action.type) {
        case app.CLICK_EVENT:
            state.clickCount += action.count;
            return { ...state };
        default:
            return state;
    }
}
