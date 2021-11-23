import React from "react";
import Navbar1 from '../../Components/Navbar1';
import Navbar2 from '../../Components/Navbar2';
import SignUp from "../SignUp/SignUp";

const SignUpPage = () =>{
    return(
        <div>
            <Navbar1/>
            <Navbar2/>
            <SignUp/>
        </div>
    )
}

export default SignUpPage;