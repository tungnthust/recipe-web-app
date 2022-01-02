import React from 'react';
import noiceChef from './img/noice-chef.png';
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap';
import "./index.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import axios from 'axios';

const API = "http://localhost:4000";

const SignedInNavbar1 = () => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    baseURL: API,
    timeout: 3000,
    headers: {'Authorization': 'Bearer '+token}
  });
  
  const handleLogout = async (user) => {
    user.preventDefault();
    console.log(username);
    console.log(token);
    try {
      const res = await axiosInstance.post("/users/logoutAll");
      let resData = res.data;
      window.alert(resData);
      localStorage.clear();
      window.location.assign("/");
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
            <Nav.Link href={"/changeinfo/" + localStorage.getItem("id")}>
              {username}
            </Nav.Link>
            <Nav.Link href="/submit">New Recipe</Nav.Link>
            <Nav.Link href="/" onClick={handleLogout}>
              Sign out
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default SignedInNavbar1;