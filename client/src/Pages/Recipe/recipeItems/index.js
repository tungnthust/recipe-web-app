import React from "react";
import './index.css';
import {Link} from 'react-router-dom';
import { FaTable,FaUsers, FaClock } from "react-icons/fa";

const RecipeItems = () =>{
  return (
    <section id="recipeItems">
      <div class="container">
        <div class="tilte">
          <h1>Top Recipes </h1>
        </div>
        <div class='row'>
          <div class='col-md-4'>
            <div class='card-text-center'>
            <div class='img-container'>
                <img src='https://caresspet.com/wp-content/uploads/2018/10/s15-1024x640.jpg' class='card-img-top'></img>
              </div>
              <div class='card-body'>
                <h5 class='card-title'>recipe name</h5>
                <p class='card-text'>description</p>
                <div class='author'>
                  <img class='avatar' src='ddsdf' alt='authorAvatar '></img>
                  By 
                  <p> authorName</p>
                </div>
              </div>
              <div class='card-footer'>
                <div class='card-footer-content'>
                  <ul>
                    <li title='difficulty'>difficulty </li>
                    <li title='yeild'><FaTable/> Yeild </li>
                    <li title='number of people'><FaUsers/> number ppl </li>
                    <li title='time'><FaClock/> time</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class='col-md-4'>
            <div class='card-text-center'>
            <div class='img-container'>
                <img src='https://caresspet.com/wp-content/uploads/2018/10/s15-1024x640.jpg' class='card-img-top'></img>
              </div>
              <div class='card-body'>
                <h5 class='card-title'>recipe name</h5>
                <p class='card-text'>description</p>
                <div class='author'>
                  <img class='avatar' src='ddsdf' alt='authorAvatar '></img>
                    By
                    <p> authorName</p>
                  
                </div>
              </div>
              <div class='card-footer'>
                <div class='card-footer-content'>
                  <ul>
                    <li title='difficulty'>difficulty </li>
                    <li title='yeild'><FaTable/> Yeild </li>
                    <li title='number of people'><FaUsers/> number ppl </li>
                    <li title='time'><FaClock/> time</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class='col-md-4'>
            <div class='card-text-center'>
            <div class='img-container'>
                <img src='https://caresspet.com/wp-content/uploads/2018/10/s15-1024x640.jpg' class='card-img-top'></img>
              </div>
              <div class='card-body'>
                <h5 class='card-title'>recipe name</h5>
                <p class='card-text'>description</p>
                <div class='author'>
                  <img class='avatar' src='ddsdf' alt='authorAvatar '></img>
                  By 
                  <p> authorName</p>
                </div>
              </div>
              <div class='card-footer'>
                <div class='card-footer-content'>
                  <ul>
                    <li title='difficulty'>difficulty </li>
                    <li title='yeild'><FaTable/> Yeild </li>
                    <li title='number of people'><FaUsers/> number ppl </li>
                    <li title='time'><FaClock/> time</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class='col-md-4'>
            <div class='card-text-center'>
            <div class='img-container'>
                <img src='https://caresspet.com/wp-content/uploads/2018/10/s15-1024x640.jpg' class='card-img-top'></img>
              </div>
              <div class='card-body'>
                <h5 class='card-title'>recipe name</h5>
                <p class='card-text'>description</p>
                <div class='author'>
                  <img class='avatar' src='ddsdf' alt='authorAvatar '></img>
                  By 
                  <p> authorName</p>
                </div>
              </div>
              <div class='card-footer'>
                <div class='card-footer-content'>
                  <ul>
                    <li title='difficulty'>difficulty </li>
                    <li title='yeild'><FaTable/> Yeild </li>
                    <li title='number of people'><FaUsers/> number ppl </li>
                    <li title='time'><FaClock/> time</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class='col-md-4'>
            <div class='card-text-center'>
            <div class='img-container'>
                <img src='https://caresspet.com/wp-content/uploads/2018/10/s15-1024x640.jpg' class='card-img-top'></img>
              </div>
              <div class='card-body'>
                <h5 class='card-title'>recipe name</h5>
                <p class='card-text'>description</p>
                <div class='author'>
                  <img class='avatar' src='ddsdf' alt='authorAvatar '></img>
                  By 
                  <p> authorName</p>
                </div>
              </div>
              <div class='card-footer'>
                <div class='card-footer-content'>
                  <ul>
                    <li title='difficulty'>difficulty </li>
                    <li title='yeild'><FaTable/> Yeild </li>
                    <li title='number of people'><FaUsers/> number ppl </li>
                    <li title='time'><FaClock/> time</li>
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