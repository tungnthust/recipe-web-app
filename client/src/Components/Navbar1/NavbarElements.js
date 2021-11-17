import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaSignInAlt, FaUser } from 'react-icons/fa';
  
export const Nav = styled.nav`
  background: #3a9691;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;
  
export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #ffffff;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export const NavImage = styled.img`
    width: 100px;
    height: 94px;
    margin: 0px;
`;

export const NavTitle = styled(Link)`
    color: #ffffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
      color: #ffffff;
    }
    font-size: 45px;
    font-family: "Pacifico", cursive;
    color: white;
`;

export const NavIconSignIn = styled(FaSignInAlt)`
margin-right: 10px;
`;

export const NavIconUser = styled(FaUser)`
margin-right: 10px;
`;

//--------------------------------------
//Mobile here
export const NavMB = styled.nav`
  background: #3a9691;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;
  
export const NavLinkMB = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
  
export const BarsMB = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 20px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenuMB = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 76px) {
    display: none;
  }
`;
  
export const NavBtnMB = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 10px;
  height: 40px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 78px) {
    display: none;
  }
`;
  
export const NavBtnLinkMB = styled(Link)`
  border-radius: 4px;
  background: #ffffff;
  padding: 4px 2px;
  height: 30px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
  font-size: 12px;
`;

export const NavImageMB = styled.img`
    width: 50px;
    height: 60px;
    margin-left: 10px;
`;

export const NavTitleMB = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    margin-left: -5px;
    cursor: pointer;
    &.active {
      color: #ffffff;
    }
    font-size: 17px;
    font-family: "Pacifico", cursive;
    color: white;
`;

export const NavIconSignInMB = styled(FaSignInAlt)`
margin: 5px;
`;

export const NavIconUserMB = styled(FaUser)`
margin: 5px;
`;