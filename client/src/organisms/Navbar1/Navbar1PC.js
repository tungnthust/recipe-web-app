import React from 'react';
import noiceChef from './img/noice-chef.png';
import {
  Nav,
  Bars,
  NavMenu,
  NavBtn,
  NavImage,
  NavTitle,
} from "./NavbarElements";
import Button from '../../atoms/Button/Button';

const Navbar1PC = () => {
  return (
    <>
      <Nav>
        <Bars />
        
        <NavMenu>
          <NavImage src={noiceChef} />
          <NavTitle to='/' activeStyle>Noice Recipe</NavTitle>
        </NavMenu>
        <NavBtn>
          <Button type="nav_link" link='/signin' size="medium" name='Sign In'/>
          <Button type="nav_link" link='/signup' size="medium primary" name='Sign Up'/>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar1PC;