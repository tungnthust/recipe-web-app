import './App.css';
import SignInPage from './Pages/SignIn';
import HomePage from './Pages/HomePage';
import MembersPage from './Pages/MemberPage';
import AuthorPage from './Pages/MemberPage/Author';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <SignInPage/>
      <HomePage/> */}
      {/* <AuthorPage2/> */}
      {/* <Route path='/' element={<HomePage/>}/>
      <Route path='/members' element={<MembersPage/>}/> */}
      {/* <AuthorPage/> */}


    <Router>
        <Routes>
        
          <Route path='/' element={<HomePage/>}/>
          <Route path='/members' element={<MembersPage/>}/>
          <Route path='/members/author1' element={<AuthorPage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
