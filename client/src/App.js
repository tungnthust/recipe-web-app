import './App.css';
import SignInPage from './Pages/SignIn';
<<<<<<< HEAD
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/Contact';

function App() {
  return (
    <div>
      {/* <SignInPage/> */}
      {/* <HomePage/> */}
      <ContactPage/>
    </div>
=======
import SignUpPage from './Pages/SignUp';
import HomePage from './Pages/HomePage';
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
      </Routes>
    </Router>
>>>>>>> 9f03e71 (Add router)
  );
}

export default App;
