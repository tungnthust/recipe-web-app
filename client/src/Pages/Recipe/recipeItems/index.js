import "./index.css";
import { FaClock } from "react-icons/fa";

import React from "react";

const RecipeItems = (list_items) => {
  let props = list_items;

  return (
    <section id="recipeItems">
      <div class="container">
        <div class="title">
          <h1>Top Recipes </h1>
        </div>
        <div class="row">
          {props.list_items.map((item) => (
            <div class="col-md-4">
              <div class="card-text-center">
                <div class="img-container">
                  <img
                    key={item.id}
                    src={item.imglink}
                    class="card-img-top"
                  ></img>
                </div>
                <div class="card-body">
                  <h5 key={item.id} class="card-title">
                    {item.name}
                  </h5>
                  <p key={item.id} class="card-text">
                    {item.description}
                  </p>
                  <div class="author1">
                    <img
                      class="avatar"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                      alt="authorAvatar "
                    ></img>
                    By
                    <p key={item.id}> {item.author}</p>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="card-footer-content">
                    <ul>
                      <li key={item.id} title="difficulty">
                        {item.difficulty}{" "}
                      </li>
                      <li key={item.id} title="time">
                        <FaClock /> {item.time}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeItems;
