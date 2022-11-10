import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = (event) => {
    setCount(count+1);
    console.log('count:', count)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={increaseCount}>Increase Count</button>
        <p>
          Count: {count}
        </p>
      </header>
    </div>
  );
}

export default App;
