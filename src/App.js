import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Shades from './components/shades';
import CountContext from './contexts/countContext';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((count+1)%100);
    console.log('count:', count)
  }

  return (
    <CountContext.Provider value={count}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={increaseCount}>Increase Count</button>
          <Shades></Shades>
        </header>
      </div>
    </CountContext.Provider>
    
  );
}

export default App;
