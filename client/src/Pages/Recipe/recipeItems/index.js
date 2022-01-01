import "./index.css";
import { FaClock, FaStar } from "react-icons/fa";

import React from "react";
import { Link } from "react-router-dom";


const RecipeItems = (props) => {
  const { id, title, description, author, difficulty, time } = props;

  const recipeInfo = {
    pathname: '/recipes/' + id,
    id : id,
  }

  return (

    <div className="col-md-4" key={id}>
      <div className="card-text-center">
        <div className="img-container">
          <Link to={recipeInfo}>
          <img 
            src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRjQrPU66ETKarsWq5fLe6vtR_ZnM5r4EVLnUJiAFN6wlcem9g94yAgh_9RP-MZ-W_n3eU1G96ptdcibkt-9H4"
            className="card-img-top"
          ></img>
          </Link>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="author1">
            <img
              className="avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
              alt="authorAvatar "
            ></img>
            By
            <p> {author}</p>
          </div>
        </div>
        <div className="card-footer">
          <div className="card-footer-content">
            <ul>
              <li title="difficulty">
                difficulty: {difficulty}
                <FaStar />
              </li>
              <li className="cookTime" title="time">
                <FaClock /> {time} min
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default RecipeItems;
