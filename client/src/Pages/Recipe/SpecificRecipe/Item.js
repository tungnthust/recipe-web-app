import { React,useState,useEffect  } from "react";
import {Link} from 'react-router-dom';
import {FaEyeDropper, FaSortNumericUpAlt, FaThumbsUp, FaPencilAlt, FaCamera, FaPhotoVideo, FaFile, FaThumbsDown, FaMobile, FaHeart} from'react-icons/fa';
import IconButton from '@material-ui/core/IconButton';
import './index.css';
import axios from 'axios'
import moment from 'moment'

const API = "http://localhost:4000";

const Item = (props) => {
    const {id} = props;

    const [recipe, setRecipe] = useState({});
    const [ingredients, setIngredient] = useState([]);
    const [steps, setSteps] = useState([]);
    const [comments, setComments] = useState([]);
    const [author, setAuthor] = useState({});
    const [isLiked, setIsLike] = useState('');

    const [image,setImage] = useState(null);
    const [comment,setComment] = useState('');

    useEffect (() => {
        const getRecipe = async () => {
            const res = await axios.get(API + '/recipes/' + id);
            setRecipe(res.data);
            setIngredient(res.data.ingredients);
            setSteps(res.data.steps);
            setComments(res.data.comments);
            setAuthor(res.data.author);
            // console.log(res.data.ingredients);
        };
        getRecipe();
    }, [])

    const checkLike = async (authorID) => {
        const res = await axios.get(API + '/recipes/islikes' + authorID);
        setIsLike(res.data)
    };

    const onClickHeart = () => {
        const token = localStorage.getItem("token");

        const axiosInstance = axios.create({
            baseURL: API,
            timeout: 3000,
            headers: {'Authorization': 'Bearer '+token}
        });
        const isLoggedIn = localStorage.getItem("token") != null ? localStorage.getItem("id") : null;
        if(isLoggedIn === null){
            alert("You must log in to add this recipe to favourited list");
            window.location = '/signUp';
        }
        else {
            // alert("Come in");
            // const checkLike = async () => {
            //     const res = await axios.get(API + '/recipes/isliked/' + localStorage.getItem("id"));
            //     setIsLike(res.data)
            // };

            const postLike = async () => {
               const res = await axiosInstance.post(API + '/recipes/like/' + id);
                if ( res.data === null ){
                    alert("SOME THING IS WRONG!!!");
                }
                else{
                    alert("Add to favorite recipes successfully");
                }
            }
            // checkLike();
            // console.log(isLiked);
            postLike();
        }
    }

    const handleComment = async(Event) =>{
        Event.preventDefault();
        const token = localStorage.getItem("token");

        const axiosInstance = axios.create({
            baseURL: API,
            timeout: 3000,
            headers: {'Authorization': 'Bearer '+token}
        });
        const isLoggedIn = localStorage.getItem("token") != null ? localStorage.getItem("id") : null;
        
        if(isLoggedIn === null){
            alert("You must log in to add this recipe to favourited list");
            window.location = '/signUp';
        }
        else {
            const res = await axiosInstance.post(API + '/recipes/comment/' + id , {
                comment : comment,
                image : image
            })
            if ( res.data === null ){
                alert("SOME THING IS WRONG!!!");
            }
            else{
                alert("Post comment successfully");
            }
        }
    }

    const authorInfor = {
        pathname: '/members/'+author._id,
        id: author._id
    }

    if (recipe !== undefined) {
        return(
            <div>
                <section className="recipe-blog" key={id}>
                    <div className='container'>
                        <div className="recipe-infor flex flex-jc-sb">
                            <div className="recipe-item">
                                <div className="img-container">
                                    <img key={id} src='https://images.foody.vn/res/g67/662372/prof/s576x330/foody-upload-api-foody-mobile-4-jpg-180705093533.jpg' alt="recipe title"></img>
                                </div>
                                <div className="recipe-content">
                                    <h1 className="recipe-content-title" key={id}>{recipe.title}</h1>
                                    <div className="recipe-content-inner">
                                        <h4>
                                            <i className="fa fa-eyedropper"><FaEyeDropper/></i>
                                            Description
                                        </h4>
                                        <p>
                                        {recipe.description}
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
                                                ingredients.map(item => {
                                                    console.log(item.ingredient.name)
                                                    return (
                                                        <div>
                                                            <li className="list-style" >{item.ingredient.name} : {item.quantity} {item.quantityType}</li>
                                                        </div>
                                                    )
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
                                            steps.map(function(item, index) {
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
                                            <img src={author.avatar} alt="fullname"></img>
                                            By
                                            <Link to={authorInfor}>{author.username}</Link>
                                        </li>
                                        <li>
                                            Cook time:
                                            <span>{recipe.cookTime}</span>
                                        </li>
                                        <li>
                                            Cuisine:
                                            <span>{recipe.cuisine}</span>
                                        </li>
                                        <li>
                                            Category:
                                            <span>{recipe.category}</span>
                                        </li>
                                        <li>
                                            Difficulty level:
                                            <span>{recipe.difficulty}</span>
                                        </li>
                                        <li>
                                            Created Date:
                                            <span>{moment(recipe.createdAt).format('L')}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="author-item-like">
                                    {/* <ul>
                                        <li> */}
                                            <i class="fa fa-heart" aria-hidden="true" onClick={onClickHeart}><FaHeart/></i>
                                        {/* </li>
                                    </ul> */}
                                </div>
        
                                <div className="comment">
                                    <div className="pannel-body">
                                        <textarea className="form-control" rows="2" placeholder="What are you thinking?" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                                        <div className="mar-top clearfix flex flex-jc-sb">
                                            <div className="action1">
                                                <input accept="image/*" id="icon-button-file"
                                                    type="file" style={{ display: 'none' }} />
                                                <label htmlFor="icon-button-file">
                                                    <IconButton color="#676767" aria-label="upload picture"component="span">
                                                        <FaPhotoVideo />
                                                    </IconButton>
                                                </label>
                                            </div>
                                            <div className="action2">
                                                <button class="btn btn-sm btn-primary" type="submit" onClick={(e) => handleComment(e)}>
                                                    <i className="fa fa-pencil fa-fw"><FaPencilAlt/></i>
                                                    Share
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="comments">
                                    <ul>
                                        {
                                            comments.map(function(item, index){
                                                const userInfor = {
                                                    pathname: '/members/' + item.user._id,
                                                    id : item.user._id,
                                                }
                                                console.log(userInfor)
                                                return (
                                                    <div className="available-comment flex flex-jc-sb">
                                                        <div className="media-left">
                                                            <a className="media-left" href="#">
                                                                <img className="img-circle img-sm" alt="Profile Picture" src={item.image}></img>
                                                            </a>
                                                        </div>
                                                        <div className="media-right">
                                                            <div class="mar-btm">
                                                                <Link to={userInfor}>
                                                                    {item.user.username}
                                                                </Link>
                                                                <p class="text-muted text-sm">
                                                                    <i class="fa fa-mobile fa-lg"><FaMobile/></i> 
                                                                    From 11m
                                                                </p>
                                                            </div>
                                                            <p>{item.content}</p>
                                                            <hr/>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
        );     
    }
    else {
        return <div>Loading</div>;
    }

}

export default Item;
