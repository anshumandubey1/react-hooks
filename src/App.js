import logo from './logo.svg';
import './App.css';

function App() {
  let count = 0;

  const increaseCount = (event) => {
    count++;
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
