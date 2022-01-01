import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

const MemberItem = (props) =>{

    //{id, avatar, name, time, own_recipes }
    const {id, avatar, name, time, numOfRecipes} = props;

    const memberInfor = {
        pathname: '/members/'+id,
        id : id
        // id:this.props.id,
        // recipesID:this.props.recipes,
        // avatar:this.props.avatar,
        // fullname:this.props.fullname,
        // username:this.props.username,
        // recipes:this.props.recipes,
        // favouritedRecipes:this.props.favouritedRecipes,
        // date:this.props.date
    };
    
    return(
    <div className="col">
        <div className="white-block member-block">
            
            <Link to={memberInfor} className="member-avatar">
                <img src={avatar}  width="150" height="150" alt="Avatar" ></img>
            </Link>

            <div className="member-holder">
                <Link to={memberInfor} className="blog-title">
                    <h5>
                        {name}
                    </h5>
                </Link>
                <ul >
                    <li> Joined in:   {time}</li>
                    <li>Wrote: {numOfRecipes} recipes</li>
                </ul>
            </div>
        </div>
    </div>
    )
}
export default MemberItem;