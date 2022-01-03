import {React, useState, useEffect} from "react";
import './index.css';

import Navbar1 from '../../Components/Navbar1';
import Navbar2 from '../../Components/Navbar2';
import Footer from '../../Components/Footer';
import MemberItem from './MemberItem'

import {FaUsers} from 'react-icons/fa';
// import { avatarData } from "./data";
import axios from "axios";

const API = "http://localhost:4000/api";

const MembersPage = () =>{

    const [members, setMembers] = useState([]);

    useEffect(() => {
        const getAllRecipes = async () => {
          
            const res = await axios.get(API + '/members');
            const items = res.data;
            items.forEach(item => {
                const newDate = new Date(item.createdAt);
                const day = newDate.getDate();
                const month = newDate.getMonth()+1;
                const year = newDate.getFullYear();
                item.createdAt = day+'-'+month+'-'+year;
                console.log(item.createdAt);
            });
            
            setMembers(res.data);
            // console.log(res.data[0]);
        };
        getAllRecipes();
      }, []);

    return(
        <div className = "authorsPage">
            <Navbar1/>   
            <Navbar2/>
            <section className="author-section">
            <div className="container">
                <div className="section-title">
                    <hr/>
                    <h1 className="text">    
                        <i className="faUser"> <FaUsers/> </i>  
                        Chefs In Our Kitchen
                    </h1>
                    <hr/>

                </div>


                

                        <div className="row">
                            {members.map((data, key) => {
                            return (
                                <div key={key} className = "avatarone" id = "onethird">
                                <MemberItem
                                    key={key}
                                    id={data._id}
                                    avatar={data.avatar}
                                    name={data.name}
                                    time={data.createdAt}
                                    numOfRecipes={data.numOfRecipes}
                                />
                                </div>
                            );
                            })}
                        </div>
            </div>
            </section>
            <div>
                <br/>
                <br/>
                <br/>
            </div>
            <Footer/>
        </div>
    )
}

export default MembersPage;