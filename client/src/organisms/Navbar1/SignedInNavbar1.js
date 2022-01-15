import React from 'react';
import noiceChef from './img/noice-chef.png';
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap';
import "./index.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import axios from 'axios';
import Button from "../../atoms/Button/Button";

const API = "http://localhost:4000/api";

const SignedInNavbar1 = () => {
  const name = localStorage.getItem("name");
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    baseURL: API,
    timeout: 3000,
    headers: {'Authorization': 'Bearer '+token}
  });
  
  const handleLogout = async (user) => {
    user.preventDefault();
    try {
      const res = await axiosInstance.post("/users/logoutAll");
      let resData = res.data;
      if(resData!==null){
        localStorage.clear();
        window.location.assign("/");
      }
    } catch (err) {
      window.alert("Logout failed! Have you logged in yet ?");
    }
  };

  return (
    <>
      <Navbar bg="success" variant="dark">
        <Container>
          <a className="navbar-brand" href="/">
            <img src={noiceChef} alt="Noice Chef" />
          </a>
          <Navbar.Brand href="/">
            <p className="logo-text">Noice Recipe</p>
          </Navbar.Brand>

          <Nav className="ms-auto">
            <Button type="nav_link" link={'/changeinfo/'+id} name={name}/>
            <Button type='nav_link' link='/submit' name="New Recipe"/>
            <Button type="Log out" handleFunction={handleLogout}/>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default SignedInNavbar1;