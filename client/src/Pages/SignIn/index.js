import React from "react";
import Navbar1 from '../../Components/Navbar1';
import Navbar2 from '../../Components/Navbar2';
import SignIn from "./SignIn";

const SignInPage = () =>{
    return(
        <div>
            <Navbar1/>
            <Navbar2/>
            <SignIn/>
        </div>
    )
}

export default SignInPage;