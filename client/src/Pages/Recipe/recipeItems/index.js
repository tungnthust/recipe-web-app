import "./index.css";
import { FaClock } from "react-icons/fa";

import React from "react";
import { Link } from "react-router-dom";

const API = "http://localhost:4000";

const RecipeItems = (props) => {
  const {id,title,description,author,difficulty,time} = props;

  const recipeInfor = {
    pathname: '/recipes/' + id,
    id : id,
  }

  return (
            <div class="col-md-4" key={id}>
              <div class="card-text-center">
                <div class="img-container">
                  <Link to={recipeInfor}>
                    <img src='http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRjQrPU66ETKarsWq5fLe6vtR_ZnM5r4EVLnUJiAFN6wlcem9g94yAgh_9RP-MZ-W_n3eU1G96ptdcibkt-9H4' class="card-img-top"></img>
                  </Link>
                </div>
                <div class="card-body">
                  <h5 class="card-title">{title}</h5>
                  <p class="card-text">{description}</p>
                  <div class="author1">
                    <img
                      class="avatar"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                      alt="authorAvatar "
                    ></img>
                    By
                    <p> {author}</p>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="card-footer-content">
                    <ul>
                      <li title="difficulty">{difficulty} </li>
                      <li title="time">
                        <FaClock /> {time}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

        
  );
};

export default RecipeItems;
