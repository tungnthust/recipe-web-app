import React from "react";
import Title from "../../atoms/Title/Title";
import RecipeCard from "../../atoms/Card/RecipeCard/RecipeCard";
import './RecipeList.css';

const RecipeList = (props) => {
  const { list, list_name } = props;
  return (
      <div className="container">
        <div className="title">
          <Title title={list_name} />
        </div>
        <div className="row">
          {list.map((item) => {
            return (
              <RecipeCard
                id={item._id}
                title={item.title}
                description={item.description}
                author={item.author.name}
                difficulty={item.difficulty}
                time={item.cookTime}
                image={item.image}
                avatar={item.author.avatar}
                authorid={item.author.id}
              />
            );
          })}
        </div>
      </div>
  );
};

export default RecipeList;
