import './App.css';
import SignInPage from './Pages/SignIn';
import SignUpPage from './Pages/SignUp';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/Contact';
import GeneralRecipes from './Pages/Recipe/GeneralRecipes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signin' element={<SignInPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/generalrecipes' element={<GeneralRecipes/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </Router>
  
  );
}

export default App;
