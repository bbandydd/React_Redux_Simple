'use strict';

import { app } from '../constants/appConstant';

let clickAction = (count = 1, delay = 0) => {
    return{
        type: app.CLICK_EVENT,
        count,
        delay
    };
}

export default {
    clickAction
};
