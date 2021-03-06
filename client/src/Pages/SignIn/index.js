import React from "react";
import Navbar1 from '../../Components/Navbar1';
import Navbar2 from '../../Components/Navbar2';
import SignIn from "./SignIn";
import HomePage from "../HomePage";

const SignInPage = () =>{
    return(
        <div>
            { localStorage.getItem("token") != null ? <HomePage/> : 
            <div>
                <Navbar1/>
                <Navbar2/>
                <div className="index">
                    <SignIn/>
                </div>
            </div>
            }
        </div>
    )
}

export default SignInPage;