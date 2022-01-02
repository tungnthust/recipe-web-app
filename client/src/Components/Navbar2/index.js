import React, {useState, useEffect} from 'react';
import './index.css';
import {FaBars} from 'react-icons/fa'

const Navbar2 = () =>{
    const [show, setShow] = useState(false);
    const [responsive, setResponsive] = useState(false);
    let effect = show && !responsive;
    let navbarClasses = 'navbar navbar-expand-md navbar-light';

    const handleScroll = () => {
        if ( window.scrollY > 700 ){
            setShow(true);
        }
        else {
            setShow(false);
        }
    }

    const handleResponsive = () => {
        if ( window.innerWidth <= 599 ) {
            setResponsive(true);
        }
        else {
            setResponsive(false);
        }
    }

    useEffect ( () => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResponsive);
    },[])

    return (
      <nav className={effect ? navbarClasses + " scrolled" : navbarClasses}>
        <div className="container">
          <button
            className="navbar-toggler button-white-menu collapsed"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <FaBars className="menu-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item" active="true">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item" active="true">
                <a className="nav-link" href="/recipes">
                  Recipes
                </a>
              </li>
              <li className="nav-item" active="true">
                <a className="nav-link" href="/members">
                  Members
                </a>
              </li>
              <li className="nav-item" active="true">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
    
}

export default Navbar2;