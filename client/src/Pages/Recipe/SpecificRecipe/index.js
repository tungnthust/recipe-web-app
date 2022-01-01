import React from "react";
import Navbar1 from '../../../Components/Navbar1';
import Navbar2 from '../../../Components/Navbar2';
import Item from "./Item";
import Footer from "../../../Components/Footer";
import { useParams } from 'react-router';

const SpecificRecipe = () =>{
    const { id } = useParams();
    return(
        <div>
            <Navbar1/>
            <Navbar2/>
            <Item id = {id}/>
            <Footer/>
        </div>
    )
}

export default SpecificRecipe;