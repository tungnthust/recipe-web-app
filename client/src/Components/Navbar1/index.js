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

const Navbar1 = () => {
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
          <NavBtnLink to='/'>
            <NavIconSignIn/>
            Sign In
          </NavBtnLink>
          <NavBtnLink to='/'>
            <NavIconUser/>
            Sign Up
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar1;