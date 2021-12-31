import './App.css';
import SignInPage from './Pages/SignIn';
import SignUpPage from './Pages/SignUp';
import RecoverPage from './Pages/Recover';
import HomePage from './Pages/HomePage';

import ContactPage from './Pages/Contact';
import GeneralRecipes from './Pages/Recipe/GeneralRecipes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubmitPage from './Pages/Submit';
import MembersPage from './Pages/MemberPage';
import MemberItem from './Pages/MemberPage/MemberItem'
import AuthorPage from './Pages/MemberPage/Author/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signin' element={<SignInPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/recover' element={<RecoverPage/>}/>
        <Route path='/recipes' element={<GeneralRecipes/>}/>
        <Route path='/recipes/kv' element={<GeneralRecipes filter="kv"/>}/>
        <Route path='/recipes/mc' element={<GeneralRecipes filter="mc"/>}/>
        <Route path='/recipes/tm' element={<GeneralRecipes filter="tm"/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/submit' element={<SubmitPage/>}/>
        <Route path='/members' element={<MembersPage/>}/>
        {/* <Route path='/members/author1' element={<AuthorPage/>}/> */}
        <Route path='/members/:id' element={<AuthorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
