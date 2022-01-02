import React from 'react';
import noiceChef from './img/noice-chef.png';
import {
  Nav,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavImage,
  NavTitle,
  NavIconSignIn,
  NavIconUser,
} from "./NavbarElements";

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
          <NavBtnLink to='/signin'>
            <NavIconSignIn/>
            Sign In
          </NavBtnLink>
          <NavBtnLink to='/signup'>
            <NavIconUser/>
            Sign Up
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar1PC;