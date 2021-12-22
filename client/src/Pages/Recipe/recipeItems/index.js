// import React from "react";
import './index.css';
import { FaTable,FaUsers, FaClock } from "react-icons/fa";

import React, { Component } from "react";
import { ListItem } from '@material-ui/core';

const RecipeItems = (listitems) => {
  let props = listitems;
  
  return (
    <section id="recipeItems">
      <div class="container">
        <div class="title">
          <h1>Top Recipes </h1>
        </div>
        <div class='row'>
        {props.listitems.map(listitem => (
          <div class='col-md-4'>
          
          
          <div class='card-text-center'>
            <div class='img-container'>
                <img key={listitem.id} src={listitem.imglink} class='card-img-top'></img>
              </div>
              <div class='card-body'>
                
                <h5 key={listitem.id} class='card-title'>{listitem.name}</h5>
                  <p key={listitem.id} class='card-text'>{listitem.description}</p>
                <div class='author1'>
                  <img class='avatar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png' alt='authorAvatar '></img>
                  By 
                  <p key={listitem.id}> {listitem.author}</p>
                </div>
              </div>
              <div class='card-footer'>
                <div class='card-footer-content'>
                  <ul>
                    <li key={listitem.id} title='difficulty'>{listitem.difficulty} </li>
                    <li key={listitem.id} title='time'><FaClock/> {listitem.time}</li>
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
  
}

export default RecipeItems;