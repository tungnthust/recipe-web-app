import React from "react";
import './index.css';
import { FaTable,FaUsers, FaClock } from "react-icons/fa";

const RecipeItems = (props) =>{
  
  const recipes =[
    {
      img_link: 'https://caresspet.com/wp-content/uploads/2018/10/s15-1024x640.jpg',
      recipe_name: 'burger',
      decription:'burger sandwith',
      author_avatar:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png',
      author_name:'Hoang Thu',
      difficulty:'3',
      time:'30min'
    },
    {
      img_link: 'https://www.hongkongfoodietours.com/wp-content/uploads/2019/01/Pineapple-bun-optimized-768x512.jpg',
      recipe_name: 'Pineapple Buns',
      decription:'Pineapple Buns made from pineapple',
      author_avatar:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png',
      author_name:'Tuan',
      difficulty:'3',
      time:'50min'
    }
  ]
  let recipelist = recipes.map(recipe => <li img_link={recipes.img_link}  />
  )
  return (
    <section id="recipeItems">
      <div class="container">
        <div class="title">
          <h1>Top Recipes </h1>
        </div>
        <div class='row'>
        <div class='col-md-4'>
        <div class='card-text-center'>
        <div class='img-container'>
            <img src={recipes.img_link} class='card-img-top'></img>
          </div>
          <div class='card-body'>
            <h5 class='card-title'>{recipes.recipe_name}</h5>
            <p class='card-text'>description</p>
            <div class='author'>
              <img class='avatar' src="{recipes.author_avatar}" alt='authorAvatar '></img>
              By 
              <p> {recipes.author_name}</p>
            </div>
          </div>
          <div class='card-footer'>
            <div class='card-footer-content'>
              <ul>
                <li title='difficulty'>{recipes.difficulty} </li>
              
                
                <li title='time'><FaClock/> {recipes.time}</li>
              </ul>
            </div>
          </div>
        </div>
      </div> 
        </div>
          
      </div>

    </section>
    
       

  );
        
}

export default RecipeItems;