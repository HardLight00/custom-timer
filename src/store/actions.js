export const CHANGE_INTERVAL = 'CHANGE_INTERVAL';

const changeInterval = value => ({
    type: CHANGE_INTERVAL,
    payload: value,
});

export {
    changeInterval
}
