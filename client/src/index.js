import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import App from './App';
import SignInPage from './Pages/SignIn';
import SignUp from './Pages/SignIn/SignUp';
import GeneralRecipes from './Pages/Recipe/GeneralRecipes';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path ="/" component={App}/>
        <Route path="/SignIn" exact component={SignInPage}/>
        <Route path="/SignUp" exact component={SignUp}/>
        <Route path="/recipes" exact component={GeneralRecipes}/>  
      </Switch>
    </Router>
    {/* <App/> */}
  </React.StrictMode>,
  document.getElementById('root')
);