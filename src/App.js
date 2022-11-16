import './App.css';
import Header from './components/header/header';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes/>
      </Router>
    </div>
    
  );
}

export default App;
