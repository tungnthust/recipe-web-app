import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar1 from '../../Components/Navbar1';
import Navbar2 from '../../Components/Navbar2';
import Contact from "./Contact";

const ContactPage = () =>{
    return(
        <div>
            <Router>
                <Navbar1/>
            </Router>
            <Navbar2/>
            <Contact/>
        </div>
    )
}

export default ContactPage;