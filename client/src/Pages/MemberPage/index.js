import React from "react";
import './index.css';

import Navbar1 from '../../Components/Navbar1';
import Navbar2 from '../../Components/Navbar2';
import Footer from '../../Components/Footer';
import MemberItem from './MemberItem'

import {FaUsers} from 'react-icons/fa';
import { avatarData } from "./data";


const MembersPage = () =>{
    return(
        <div className = "authorsPage">
            <Navbar1/>   
            <Navbar2/>
            <section className="author-section">
            <div className="container">
                <div className="section-title">
                    {/* <h4 className="dashLine">----------------------------------------------------------------------------------------------------------</h4> */}
                    <hr/>
                    <h1 className="text">    
                        <i className="faUser"> <FaUsers/> </i>  
                        Chefs In Our Kitchen
                    </h1>
                    <hr/>
                    {/* <h4 className="dashLine">----------------------------------------------------------------------------------------------------------</h4> */}

                </div>


                {/* <div className="row">
                    
                        <MemberItem/>
                    
                </div> */}

                        <div className="row">
                            {avatarData.map((data, key) => {
                            return (
                                <div key={key} className = "avatarone" id = "onethird">
                                <MemberItem
                                    key={key}
                                    image={data.image}
                                    author={data.author}
                                    joinDate={data.joinDate}
                                    recipeWrote={data.recipeWrote}
                                />
                                </div>
                            );
                            })}
                        </div>
            </div>
            </section>
            <Footer/>
        </div>
    )
}

export default MembersPage;