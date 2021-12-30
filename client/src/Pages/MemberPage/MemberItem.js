import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

const MemberItem = ({ image, author, joinDate, recipeWrote }) =>{
    
    
    return(
    <div className="col">
        <div className="white-block member-block">
            
            <Link to='/members/author1' className="member-avatar">
                <img src={image}  width="150" height="150" alt="Avatar" ></img>
            </Link>

            <div className="member-holder">
                <Link to='/members/author1' className="blog-title">
                    <h5>
                        {author}
                    </h5>
                </Link>
                <ul >
                    <li> Joined in:   {joinDate}</li>
                    <li>Wrote: {recipeWrote} recipes</li>
                </ul>
            </div>
        </div>
    </div>
    )
}
export default MemberItem;