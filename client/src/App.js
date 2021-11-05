import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar1 from './Components/Navbar1';
import QuickFilter from './Components/QuickFilter';

function App() {
  return (
    <div>
      <Router>
        <Navbar1/>
      </Router>
      <QuickFilter/>
    </div>
  );
}

export default App;
