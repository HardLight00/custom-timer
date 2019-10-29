import React, {createContext} from 'react';
import {createStore} from "./store/slomux";
import {reducer} from "./store/reducers";
import Timer from "./containers/Timer";
import './App.css';

const IntervalContext = createContext({});
const initialState = {currentInterval: 1};

const App = () => {
    return (
        <div id='app'>
            <IntervalContext.Provider value={createStore(reducer, initialState)}>
                <Timer/>
            </IntervalContext.Provider>
        </div>
    );
};

export {
    IntervalContext
}

export default App;
