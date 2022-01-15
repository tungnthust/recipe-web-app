import "./RecipeCard.css";
import { FaClock, FaStar } from "react-icons/fa";

import React from "react";
import { Link } from "react-router-dom";


const RecipeCard = (props) => {
  const {
    id,
    title,
    description,
    author,
    difficulty,
    time,
    avatar,
    image,
    authorid,
  } = props;

  const recipeInfo = {
    pathname: "/recipes/" + id,
    id: id,
  };

  const authorInfo = {
    pathname: "/members/" + authorid,
    id: authorid,
  };
  return (
    <div className="col-md-4" key={id}>
      <div className="card-text-center">
        <div className="img-container">
          <Link to={recipeInfo}>
            <img
              src={`${image}`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqjnW3exxJNLtPV7reKRCjjELkyXcO4a_1Q&usqp=CAU";
              }}
              alt="food"
              className="card-img-top"
            />
          </Link>
        </div>
        <div className="card-body">
          <Link to={recipeInfo} className="titlelink">
            <h5 className="card-title">{title}</h5>
          </Link>
          <p className="card-text">{description}</p>
          <div className="author1">
            <Link to={authorInfo}>
              <img
                src={`${avatar}`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg";
                }}
                alt="Avatar"
                className="avatar"
              />
            </Link>
            <Link to={authorInfo} className="titlelink">
              <p> {author}</p>
            </Link>
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
                <FaClock /> {time}min
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
