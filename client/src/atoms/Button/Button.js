import React from "react";
import './Button.css';
import { Link } from "react-router-dom";

export const Button = (props) =>{
    const {type,name,handleFunction,link,size} = props;
    switch(type){
        case "nav_link":
            return(
                <Link to={link} className={"nav_btn "+size}>{name}</Link>
            )
        case "button_submit":
            return(
                <button type="submit" className="btn btn-outline-primary mt-3" onClick={handleFunction}>{name}</button>
            )
        case "link":
            return(
                <Link to={link} className="btn btn-outline-success">{name}</Link>
            )
        case "Log out":
            return(
                <button className="nav_btn" onClick={handleFunction}>Log out</button>
            )
        default:
            return(
                <></>
            )
    }
}

export default Button;