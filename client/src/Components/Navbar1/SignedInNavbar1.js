import React from 'react';
import noiceChef from './img/noice-chef.png';
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap';
// import "./index.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

const SignedInNavbar1 = () => {

  return (
    <>
 
  <Navbar bg="success" variant="dark">
    <Container>
    <a class="navbar-brand" href="/"><img src={noiceChef} /></a>
    <Navbar.Brand href="/"><p class="logo-text">Noice Recipe</p></Navbar.Brand>
    
    <Nav className="ms-auto">
      <Nav.Link href="/members">hungnh</Nav.Link>
      <Nav.Link href="/submit">New Recipe</Nav.Link>
      <Nav.Link href="/signout">Sign out</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  
</>
  
  );
};

export default SignedInNavbar1;