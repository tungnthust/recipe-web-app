import React from "react";
import Navbar1 from '../../Components/Navbar1';
import Navbar2 from '../../Components/Navbar2';
import Item from "./Item";
import Footer from "../../Components/Footer";
const RecipeItem = () =>{
    return(
        <div>
            <Navbar1/>
            <Navbar2/>
            <Item/>
            <Footer/>
        </div>
    )
}

export default RecipeItem;