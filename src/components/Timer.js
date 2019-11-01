import React, {useCallback, useEffect, useState} from 'react'
import IntervalSettings from './IntervalSettings'
import './timer.css'
import {connect} from "../store/slomux";

const TimerComponent = props => {
    const {currentInterval} = props;
    const [isActive, setIsActive] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [beforeUpdate, setBeforeUpdate] = useState(currentInterval);

    const updateCurrentTime = useCallback(() => {
        setBeforeUpdate(currentInterval);
        setCurrentTime(currentTime + currentInterval);
    }, [currentInterval, currentTime]);

    const decrementBeforeUpdate = useCallback(() => {
        setBeforeUpdate(beforeUpdate - 1)
    }, [beforeUpdate]);

    const clear = intervalId => () => {
        clearInterval(intervalId);
    };

    useEffect(() => {
        const intervalId = isActive ? setInterval(updateCurrentTime, currentInterval * 1000) : 0;
        return clear(intervalId);
    }, [isActive, currentInterval, updateCurrentTime]);

    useEffect(() => {
        const intervalId = isActive ? setInterval(decrementBeforeUpdate, 1000) : 0;
        return clear(intervalId);
    }, [isActive, decrementBeforeUpdate, currentInterval]);

    useEffect(() => {
        setBeforeUpdate(currentInterval);
    }, [currentInterval]);

    const toggle = () => setIsActive(!isActive);

    const reset = () => {
        setBeforeUpdate(currentInterval);
        setCurrentTime(0);
        setIsActive(false);
    };

    return (
        <div id='timer'>
            <IntervalSettings/>
            <div id='timer__info'>
                Timer: {currentTime} sec.
                {isActive && <div id='timer__before-update'>Before update: {beforeUpdate} sec</div>}
            </div>
            <div id='timer__controllers'>
                <button id='timer__start' type='button' onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button>
                <button id='timer__stop' type='button' onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

const Timer = connect(state => ({
    currentInterval: state.currentInterval || 1
}), () => {})(TimerComponent);

export default Timer
