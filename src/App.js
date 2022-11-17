import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/header';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
