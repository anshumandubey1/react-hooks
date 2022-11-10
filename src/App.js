import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import Shades from './components/shades';
import CountContext from './contexts/countContext';

const reducer = (count, action) => {
  // console.log({count, action})
  switch (action.type) { 
    case 'increment':
      return (count + 101)%100;
    case 'decrement':
      return (count + 99)%100;
    default:
      throw new Error();
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  const increaseCount = () => {
    dispatch({type: 'increment'});
  }

  const decreaseCount = () => {
    dispatch({type: 'decrement'});
  }

  return (
    <CountContext.Provider value={count}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='buttons'>
            <button onClick={increaseCount}>Increase Count</button>
            <button onClick={decreaseCount}>Decrease Count</button>
          </div>
          <Shades/>
        </header>
      </div>
    </CountContext.Provider>
    
  );
}

export default App;
