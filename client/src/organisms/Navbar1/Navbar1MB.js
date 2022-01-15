import React from 'react';
import noiceChef from './img/noice-chef.png';
import Button from "../../atoms/Button/Button";
import {
  NavMB,
  BarsMB,
  NavMenuMB,
  NavBtnMB,
  NavImageMB,
  NavTitleMB,
} from "./NavbarElements";

const Navbar1MB = () => {
  return (
    <>
      <NavMB>
        <BarsMB />

        <NavMenuMB>
          <NavImageMB src={noiceChef} />
          <NavTitleMB to="/" activeStyle>
            Noice Recipe
          </NavTitleMB>
        </NavMenuMB>
        <NavBtnMB>
          <Button type="nav_link" link='/signin' size="medium" name='Sign In' />
          <Button type="nav_link" link='/signup' size="medium primary" name='Sign Up'/>
        </NavBtnMB>
      </NavMB>
    </>
  );
};

export default Navbar1MB;