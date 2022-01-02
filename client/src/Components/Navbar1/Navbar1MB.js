import React from 'react';
import noiceChef from './img/noice-chef.png';
import {
  NavMB,
  BarsMB,
  NavMenuMB,
  NavBtnMB,
  NavBtnLinkMB,
  NavImageMB,
  NavTitleMB,
  NavIconSignInMB,
  NavIconUserMB,
} from "./NavbarElements";

const Navbar1MB = () => {
    return (
        <>
            <NavMB>
                <BarsMB />

                <NavMenuMB>
                    <NavImageMB src={noiceChef} />
                    <NavTitleMB to='/' activeStyle>Noice Recipe</NavTitleMB>
                </NavMenuMB>
                <NavBtnMB>
                    <NavBtnLinkMB to='/signin'>
                        <NavIconSignInMB />
                        Sign In
                    </NavBtnLinkMB>
                    <NavBtnLinkMB to='/signup'>
                        <NavIconUserMB />
                        Sign Up
                    </NavBtnLinkMB>
                </NavBtnMB>
            </NavMB>
        </>
    );
};

export default Navbar1MB;