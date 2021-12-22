import { React,useState } from "react";
import {Link} from 'react-router-dom';
import {FaEyeDropper, FaSortNumericUpAlt, FaThumbsUp, FaPencilAlt, FaCamera, FaPhotoVideo, FaFile, FaThumbsDown, FaMobile} from'react-icons/fa';
import './index.css';

const Item = () => {
    return(
        <section className='recipe-blog'>
            <div className='container'>
                <div className="recipe-infor flex flex-jc-sb">
                    <div className="recipe-item">
                        <div className="img-container">
                            <img src="https://image.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg" alt="recipe title"></img>
                        </div>
                        <div className="recipe-content">
                            <h1 className="recipe-content-title">Recipe Title</h1>
                            <div className="recipe-content-inner">
                                <h4>
                                    <i className="fa fa-eyedropper"><FaEyeDropper/></i>
                                    Description
                                </h4>
                                <p>
                                    Acerbic is anything sour, bitter or sharp - cutting, caustic, acid, mordant, barbed, prickly, biting, pointed. The opposite flavor would be mild, sweet, or honeyed.
                                    Acid or Acidic food can be sharp, tart, sour, bitter. Just the opposite of sweet, sugary, honey.
                                    Acrid taste can be considered pungent, bitter, choking, sharp, unpleasant, harsh - sharp, cutting, caustic, bitter, vitriolic, mordant, trenchant - sour, tart, sharp, biting, acerbic.
                                    Aftertaste is the trace, hint, smack, relish, savor food leaves behind.
                                    Ambrosia is the food of the gods, and epicurean delight, food fit for a king, delicacy, heavenly spread, gastronomical delight, some apply this term to the pièce de résistance in a meal.
                                    Ambrosial is, therefore, fit for the gods, delectable, mouthwatering, heavenly, savory, delicious, tasty, toothsome, divine. It is not distasteful or disgusting at all.
                                    Appealing food is attractive, tempting, interesting, pleasing, alluring, likable, engaging, charming, fascinating, glamorous. It is never repulsive, disgusting, or repellent.
                                </p>
                            </div>
                            <hr></hr>
                            <div className="recipe-content-ingredients">
                                <h4>
                                    <i className="fa fa-eyedropper"><FaEyeDropper/></i>
                                    Ingredients
                                </h4>
                                <ul>
                                    <li className="list-style" key="index">Hello</li>
                                    <li className="list-style" key="index">From</li>
                                    <li className="list-style" key="index">The</li>
                                    <li className="list-style" key="index">Other</li>
                                    <li className="list-style" key="index">Side</li>
                                </ul>
                            </div>
                            <div className="recipe-content-steps">
                                <h4>
                                    <i className="fa fa-sort-numeric-asc"><FaSortNumericUpAlt/></i>
                                    Steps
                                </h4>
                                <ul>
                                    <li className="list-style" key="index">Step 1</li>
                                    <li className="list-style" key="index">Step 2</li>
                                    <li className="list-style" key="index">Step 3</li>
                                    <li className="list-style" key="index">Step 4</li>
                                    <li className="list-style" key="index">Step 5</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="author-item">
                        <div className="author-item-infor">
                            <ul>
                                <li className="author-avatar">
                                    <img src="https://cdnmedia.webthethao.vn/thumb/720-405/uploads/img/files/images/fullsize/faker-sb.jpg" alt="fullname"></img>
                                    By
                                    <Link to="/author">Faker: My husband</Link>
                                </li>
                                <li>
                                    Cook time:
                                </li>
                                <li>
                                    Cuisine:
                                </li>
                                <li>
                                    Category:
                                </li>
                                <li>
                                    Difficulty level:
                                </li>
                                <li>
                                    Created Date:
                                </li>
                            </ul>
                        </div>
                        <div className="author-item-like">
                            <ul>
                                <li>
                                    <i class="fa fa-thumbs-up" aria-hidden="true"><FaThumbsUp></FaThumbsUp></i>
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
                                        {/* <a class="take-photo" href="#"><FaCamera/></a> */}
                                        <a class="photo" href="#"><FaPhotoVideo/></a>
                                        {/* <a class="file" href="#"><FaFile/></a> */}
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
                                {/* <div class="pad-ver">
                                <div class="btn-group">
                                    <a class="btn btn-sm btn-default btn-hover-success" href="#">
                                        <i class="fa fa-thumbs-up"><FaThumbsUp/></i>
                                    </a>
                                    <a class="btn btn-sm btn-default btn-hover-danger" href="#">
                                        <i class="fa fa-thumbs-down"><FaThumbsDown/></i>
                                    </a>
                                </div>
                                    <a class="btn btn-sm btn-default btn-hover-primary" href="#"><FaPencilAlt/>Comment</a>
                                </div> */}
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
