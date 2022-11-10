import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Shades from './components/shades';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((count+1)%100);
    console.log('count:', count)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={increaseCount}>Increase Count</button>
        <Shades value={count}></Shades>
      </header>
    </div>
  );
}

export default App;
