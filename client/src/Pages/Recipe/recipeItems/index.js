// import React from "react";
import './index.css';
import { FaTable,FaUsers, FaClock } from "react-icons/fa";

import React, { Component } from "react";
import { ListItem } from '@material-ui/core';

class RecipeItems extends Component {
  state = {
    listitems: [
      {
        id: 0,
        name: 'burger',
        decription:'sandwith that made with buns and ground beef in the middle',
        author:'Hoang Thu',
        difficulty: '5',
        time: '30min',
        imglink:'https://caresspet.com/wp-content/uploads/2018/10/s15-1024x640.jpg'
      },
      {
        id: 1,
        name: 'bread',
        decription:'sandwith that made with buns and ground beef in the middle',
        author:'Hoang Thu',
        difficulty: '5',
        time: '30min',
        imglink: 'https://www.thespruceeats.com/thmb/ZJyWw36nZ1lLNi5FHOKRy9daQqs=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/loaf-of-bread-182835505-58a7008c5f9b58a3c91c9a14.jpg'
      }
    ]
  };
  render(){
  return (
    <section id="recipeItems">
      <div class="container">
        <div class="title">
          <h1>Top Recipes </h1>
        </div>
        <div class='row'>
          <React.Fragment>
          <div class='col-md-4'>
<<<<<<< HEAD
          {this.state.listitems.map(listitem => (<div class='card-text-center'>
=======
            <div class='card-text-center'>
            <div class='img-container'>
                <img src='https://caresspet.com/wp-content/uploads/2018/10/s15-1024x640.jpg' class='card-img-top'></img>
              </div>
              <div class='card-body'>
                <h5 class='card-title'>recipe name</h5>
                <p class='card-text'>description</p>
                <div class='author'>
                  <img class='avatar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png' alt='authorAvatar '></img>
                  By 
                  <p> authorName</p>
                </div>
              </div>
              <div class='card-footer'>
                <div class='card-footer-content'>
                  <ul>
                    <li title='difficulty'>difficulty </li>
                    
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
                  <img class='avatar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png' alt='authorAvatar '></img>
                  By 
                  <p> authorName</p>
                </div>
              </div>
              <div class='card-footer'>
                <div class='card-footer-content'>
                  <ul>
                    <li title='difficulty'>difficulty </li>
                    
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
                  <img class='avatar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png' alt='authorAvatar '></img>
                  By 
                  <p> authorName</p>
                </div>
              </div>
              <div class='card-footer'>
                <div class='card-footer-content'>
                  <ul>
                    <li title='difficulty'>difficulty </li>
                    
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
                  <img class='avatar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png' alt='authorAvatar '></img>
                  By 
                  <p> authorName</p>
                </div>
              </div>
              <div class='card-footer'>
                <div class='card-footer-content'>
                  <ul>
                    <li title='difficulty'>difficulty </li>
                    
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
                  <img class='avatar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png' alt='authorAvatar '></img>
                  By 
                  <p> authorName</p>
                </div>
              </div>
              <div class='card-footer'>
                <div class='card-footer-content'>
                  <ul>
                    <li title='difficulty'>difficulty </li>
                    
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
                  <img class='avatar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png' alt='authorAvatar '></img>
                  By 
                  <p> authorName</p>
                </div>
              </div>
              <div class='card-footer'>
                <div class='card-footer-content'>
                  <ul>
                    <li title='difficulty'>difficulty </li>
                    
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
                  <img class='avatar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png' alt='authorAvatar '></img>
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
                  <img class='avatar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png' alt='authorAvatar '></img>
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
                  <img class='avatar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png' alt='authorAvatar '></img>
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
>>>>>>> bd58b618e35797e5e8e50333fd2bdebf10352271
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
            </div>))}
          </div>
          </React.Fragment>
        </div>
          
      </div>

    </section>
    
       

  );
  }
}

export default RecipeItems;