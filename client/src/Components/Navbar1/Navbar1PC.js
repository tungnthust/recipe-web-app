import React from 'react';
import noiceChef from './img/noice-chef.png';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavImage,
  NavTitle,
  NavIconSignIn,
  NavIconUser
} from './NavbarElements';

const Navbar1PC = () => {
  return (
    <>
      <Nav>
        <Bars />
        
        <NavMenu>
          <NavImage src={noiceChef} />
          <NavTitle to='/' activeStyle>Noice Recipe</NavTitle>
          {/* <NavLink to='/' activeStyle>
            About
          </NavLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/SignIn'>
            <NavIconSignIn/>
            Sign In
          </NavBtnLink>
          <NavBtnLink to='/SignUp'>
            <NavIconUser/>
            Sign Up
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar1PC;