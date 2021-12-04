import React from "react";
import Navbar1 from '../../Components/Navbar1';
import SlideShow from '../../Components/SlideShow';
import Navbar2 from '../../Components/Navbar2';
import QuickFilter from '../../Components/QuickFilter';
import Footer from '../../Components/Footer';

const HomePage = () =>{
    return(
        <div>
        <Navbar1/>
        <SlideShow/>
        <Navbar2/>
        <QuickFilter/>
        <QuickFilter/>
        <QuickFilter/>
        <QuickFilter/>
        <Footer/>
        </div>
    )
}

export default HomePage;