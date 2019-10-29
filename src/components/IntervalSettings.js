import React from 'react'

export const IntervalSettingsComponent = props => {
    const {currentInterval, changeInterval} = props;

    return <div id='interval-settings'>
        <span id='interval-settings__info'>
            Интервал обновления секундомера: {currentInterval} сек.
        </span>
        <div id="interval-settings__controllers">
            <button id='interval-settings__decrement' type='button' onClick={() => changeInterval(-1)}>-</button>
            <button id='interval-settings__increment' type='button' onClick={() => changeInterval(1)}>+</button>
        </div>
    </div>
};
