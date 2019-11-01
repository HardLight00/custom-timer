import React, {useCallback, useContext, useEffect, useState} from 'react'
import {IntervalContext} from "../App";

export const createStore = (reducer, currentState = {}) => {
    const listeners = [];

    const getState = () => currentState;
    const dispatch = action => {
        currentState = reducer(currentState, action);
        listeners.forEach(listener => listener())
    };

    const subscribe = listener => listeners.push(listener);
    const unsubscribe = listener => {
        const index = listeners.indexOf(listener);
        if (index !== -1)
            listeners.splice(index, 1);
    };

    return {getState, dispatch, subscribe, unsubscribe}
};

export const connect = (mapStateToProps, mapDispatchToProps) =>
    Component => props => {
        const context = useContext(IntervalContext);
        const {getState, dispatch, subscribe, unsubscribe} = context;

        const [, updateState] = useState(null);
        const forceUpdate = useCallback(() => updateState({}), []);
        useEffect(() => {
            subscribe(forceUpdate);
            return () => unsubscribe(forceUpdate);
        }, [forceUpdate, subscribe]);

        return (
            <Component
                {...props}
                {...mapStateToProps(getState(), props)}
                {...mapDispatchToProps(dispatch, props)}
            />
        );
    };
