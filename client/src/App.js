import './App.css';
import SignInPage from './Pages/SignIn';
import SignUpPage from './Pages/SignUp';
import RecoverPage from './Pages/Recover';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/Contact';
import Recipe from './Pages/Recipe';
import SpecificRecipe from './Pages/Recipe/SpecificRecipe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubmitPage from './Pages/Submit';
import MembersPage from './Pages/MemberPage';
import AuthorPage from './Pages/MemberPage/Author/index';
import ChangeInforPage from './Pages/MemberPage/Author/ChangeInfor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signin' element={<SignInPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/recover' element={<RecoverPage/>}/>
        <Route path='/recipes' element={<Recipe/>}/>
        <Route path='/recipes/:id' element={<SpecificRecipe/>}/>
        <Route path='/recipes/kv' element={<Recipe filter="Appetizer"/>}/>
        <Route path='/recipes/mc' element={<Recipe filter="Main Course"/>}/>
        <Route path='/recipes/tm' element={<Recipe filter="Dessert"/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/submit' element={<SubmitPage/>}/>
        <Route path='/members' element={<MembersPage/>}/>
        <Route path="/changeinfo/:id" element={<ChangeInforPage/>}/>
        <Route path='/members/:id' element={<AuthorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
