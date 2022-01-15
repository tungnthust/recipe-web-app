import React from "react";
import { FaUsers } from "react-icons/fa";
import './MemberTitle.css';

const MemberTitle = ()=>{
    return(
        <div className="section-title">
        <div className="text">
          <i className="faUser">
            {" "}
            <FaUsers />{" "}
          </i>
          Chefs In Our Kitchen
        </div>
      </div>
    )
}

export default MemberTitle;