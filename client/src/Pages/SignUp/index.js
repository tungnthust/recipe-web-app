import React from "react";
import Navbar1 from "../../organisms/Navbar1";
import Navbar2 from "../../organisms/Navbar2";
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