import './App.css';
import Header from './components/header/header';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';

function App() {
    return (
        <Router>
          <Header/>
          <Routes/>
        </Router>
    );
}

export default App;
