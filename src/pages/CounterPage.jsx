import React, { useReducer } from 'react';
import Shades from '../components/counter/shades';
import CountContext, { reducer } from '../contexts/countContext';
import Page from './Page';
import logo from '../logo.svg';

function CounterPage() {
  const [count, dispatch] = useReducer(reducer, 0);

  const increaseCount = () => {
    dispatch({ type: 'increment' });
  };

  const decreaseCount = () => {
    dispatch({ type: 'decrement' });
  };
  return (
    <Page>
      <CountContext.Provider value={count}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="buttons">
              <button type="button" onClick={increaseCount}>Increase Count</button>
              <button type="button" onClick={decreaseCount}>Decrease Count</button>
            </div>
            <Shades />
          </header>
        </div>
      </CountContext.Provider>
    </Page>
  );
}

export default CounterPage;
