import {CHANGE_INTERVAL,} from "./actions";

const intervalReducer = (currentInterval, {type, payload}) => {
    // noinspection JSRedundantSwitchStatement
    switch (type) {
        case CHANGE_INTERVAL:
            const updatedInterval = currentInterval + payload;
            return updatedInterval >= 1 ? updatedInterval : currentInterval;
        default:
            return currentInterval
    }
};

export const reducer = (state, action) => {
    return {
        currentInterval: intervalReducer(state.currentInterval, action),
    };
};