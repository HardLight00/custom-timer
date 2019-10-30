import React from 'react'
import {changeInterval} from "../store/actions";
import {connect} from "../store/slomux";

const IntervalSettingsComponent = props => {
    const {currentInterval, changeInterval} = props;

    return <div id='interval-settings'>
        <span id='interval-settings__info'>
            Interval for update: {currentInterval} sec.
        </span>
        <div id="interval-settings__controllers">
            <button id='interval-settings__decrement' type='button' onClick={() => changeInterval(-1)}>-</button>
            <button id='interval-settings__increment' type='button' onClick={() => changeInterval(1)}>+</button>
        </div>
    </div>
};

const IntervalSettings = connect(state => ({
    currentInterval: state.currentInterval
}), dispatch => ({
    changeInterval: value => dispatch(changeInterval(value))
}))(IntervalSettingsComponent);

export default IntervalSettings