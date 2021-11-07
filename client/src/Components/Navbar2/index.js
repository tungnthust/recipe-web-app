import React, {useState, useEffect} from 'react';
import './index.css';


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
        if ( window.innerWidth <= 600 ) {
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

    useEffect ( () => {
        console.log(window.scrollY);
        console.log(window.innerWidth);
        console.log(effect);
    },[show, responsive])

    return (
        <nav class={ effect ? navbarClasses + ' scrolled' : navbarClasses}>
            <div class="container">
                <button class="navbar-toggler button-white-menu collapsed"  data-toggle="collapse" data-target="#navbarSupportedContent">
                        <span class="sr-only">Toggle navigation</span>
                        <i class ="fa fa-bars fa-3x"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item" active>
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item" active>
                            <a class="nav-link" href="/recipes">Recipes</a>
                        </li>
                        <li class="nav-item" active>
                            <a class="nav-link" href="/members">Members</a>
                        </li>
                        <li class="nav-item" active>
                            <a class="nav-link" href="/contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>        
        </nav>
    )
    
}

export default Navbar2;