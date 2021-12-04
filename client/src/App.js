import './App.css';
import SignInPage from './Pages/SignIn';
import SignUpPage from './Pages/SignUp';
import RecoverPage from './Pages/Recover';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/Contact';
import GeneralRecipes from './Pages/Recipe/GeneralRecipes';
import RecipeItem from './Pages/RecipeItem';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signin' element={<SignInPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/recover' element={<RecoverPage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/recipes' element={<GeneralRecipes/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </Router>
  
  );
}

export default App;
