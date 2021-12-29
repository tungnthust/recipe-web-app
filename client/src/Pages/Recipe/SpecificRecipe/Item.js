import { React,useState } from "react";
import {Link} from 'react-router-dom';
import {FaEyeDropper, FaSortNumericUpAlt, FaThumbsUp, FaPencilAlt, FaCamera, FaPhotoVideo, FaFile, FaThumbsDown, FaMobile} from'react-icons/fa';
import './index.css';
import axios from 'axios'

const Item = (item_id) => {
    let props = item_id;

    onClickLike(event) {
        event.preventDefault();
        const likeRecipe = {
            
        }
    }
    return(
        <section className='recipe-blog'>
            <div className='container'>
                <div className="recipe-infor flex flex-jc-sb">
                    <div className="recipe-item">
                        <div className="img-container">
                            <img key={props.id} src={props.imglink} alt="recipe title"></img>
                        </div>
                        <div className="recipe-content">
                            <h1 className="recipe-content-title" key={props.id}>{props.name}</h1>
                            <div className="recipe-content-inner">
                                <h4>
                                    <i className="fa fa-eyedropper"><FaEyeDropper/></i>
                                    Description
                                </h4>
                                <p>
                                   {props.description}
                                </p>
                            </div>
                            <hr></hr>
                            <div className="recipe-content-ingredients">
                                <h4>
                                    <i className="fa fa-eyedropper"><FaEyeDropper/></i>
                                    Ingredients
                                </h4>
                                <ul>
                                    {
                                        props.ingredients.map(function(item, index){
                                            return <li className="list-style" key={index}>{item}</li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="recipe-content-steps">
                                <h4>
                                    <i className="fa fa-sort-numeric-asc"><FaSortNumericUpAlt/></i>
                                    Steps
                                </h4>
                                <ul>
                                   {
                                       props.steps.map(function(item, index) {
                                           return (
                                               <div>
                                                   <div>Step {index+1}</div>
                                                    <li className="list-style" key={index}>{item}</li>
                                                </div>
                                           )
                                       })
                                   }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="author-item">
                        <div className="author-item-infor">
                            <ul>
                                <li className="author-avatar">
                                    <img src={props.author.avatar} alt="fullname"></img>
                                    By
                                    <Link to="/author">{props.author.name}</Link>
                                </li>
                                <li>
                                    Cook time:
                                    <span>{props.times}</span>
                                </li>
                                <li>
                                    Cuisine:
                                    <span>{props.cuisine}</span>
                                </li>
                                <li>
                                    Category:
                                    <span>{props.category}</span>
                                </li>
                                <li>
                                    Difficulty level:
                                    <span>{props.difficulty}</span>
                                </li>
                                <li>
                                    Created Date:
                                    <span>{props.date}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="author-item-like">
                            <ul>
                                <li>
                                    <i class="fa fa-thumbs-up" onClick={} aria-hidden="true"><FaThumbsUp></FaThumbsUp></i>
                                </li>
                                <li>
                                    <i class="fa fa-heart" aria-hidden="true"><FaThumbsDown/></i>
                                </li>
                            </ul>
                        </div>

                        <div className="comment">
                            <div className="pannel-body">
                                <textarea className="form-control" rows="2" placeholder="What are you thinking?"></textarea>
                                <div className="mar-top clearfix flex flex-jc-sb">
                                    <div className="action1"> 
                                        <a class="photo" href="#"><FaPhotoVideo/></a>
                                    </div>
                                    <div className="action2">
                                        <button class="btn btn-sm btn-primary" type="submit">
                                            <i className="fa fa-pencil fa-fw"><FaPencilAlt/></i>
                                            Share
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="available-comment flex flex-jc-sb">
                            <div className="media-left">
                                <a className="media-left" href="#">
                                    <img className="img-circle img-sm" alt="Profile Picture" src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/118774808_756519855165899_6352703886386344565_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=YdnRB-vTcoIAX9rl4-F&_nc_ht=scontent.fhan2-4.fna&oh=7a22f5b2459d1436e114889226d14b7e&oe=61C40F6A"></img>
                                </a>
                            </div>
                            <div className="media-right">
                                <div class="mar-btm">
                                    <a href="#" class="btn-link">Lisa D.</a>
                                    <p class="text-muted text-sm">
                                        <i class="fa fa-mobile fa-lg"><FaMobile/></i> 
                                        - 11 min ago
                                    </p>
                                </div>
                                <p>consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Item;
