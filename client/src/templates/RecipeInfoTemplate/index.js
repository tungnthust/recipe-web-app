import React from "react";
import Navbar1 from "../../organisms/Navbar1";
import Navbar2 from "../../organisms/Navbar2";
import Item from "./Item";
import Footer from '../../molecules/Footer';
import { useParams } from 'react-router';

const SpecificRecipe = () =>{
    const { id } = useParams();
    return(
        <div>
            <Navbar1/>
            <Navbar2/>
            <Item id = {id}/>
            <div>
                <br/>
                <br/>
                <br/>
            </div>
            <Footer/>
        </div>
    )
}

export default SpecificRecipe;