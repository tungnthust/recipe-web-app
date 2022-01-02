import { React,useState,useEffect  } from "react";
import {Link} from 'react-router-dom';
import {
  FaEyeDropper,
  FaSortNumericUpAlt,
  FaPencilAlt,
  FaMobile,
  FaHeart,
} from "react-icons/fa";
import "./index.css";
import axios from "axios";
import moment from "moment";


const API = "http://localhost:4000";

const Item = (props) => {
  const { id } = props;
  const [recipe, setRecipe] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");

    const axiosInstance = axios.create({
        baseURL: API,
        timeout: 3000,
        headers: {'Authorization': 'Bearer '+token}
    });
    const checkIsLike = async () => {
        const res = await axiosInstance.get(API + '/recipes/isliked/' + id);
        setCheckLike(!res.data.isLiked)
        // console.log(res.data.isLiked)
    };
    const getRecipe = async () => {
      const res = await axios.get(API + "/recipes/" + id);
      setRecipe(res.data);
    };
    checkIsLike();
    getRecipe();
  }, []);

    const [ingredients, setIngredient] = useState([]);
    const [steps, setSteps] = useState([]);
    const [comments, setComments] = useState([]);
    const [author, setAuthor] = useState({});
    const [checkLike, setCheckLike] = useState();

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
            const checkIsLike = async () => {
                const res = await axiosInstance.get(API + '/recipes/isliked/' + id);
                setCheckLike(!res.data.isLiked)
                // console.log(res.data.isLiked)
            };

            const postLike = async () => {
                checkIsLike();
               const res = await axiosInstance.post(API + '/recipes/like/' + id);
                if ( res.data === null ){
                    alert("SOME THING IS WRONG!!!");
                }
                else{
                    // if (checkLike) {
                    //     alert("Add to favorite recipes list successfully");
                    // }
                    // else {
                    //     alert("Remove from favorite recipes list successfully");
                    // }
                    setCheckLike(!checkLike);
                }
            }
            postLike();
        }
    }

    const handleComment = async(Event) =>{
        Event.preventDefault();
        // const token = localStorage.getItem("token");

        // const axiosInstance = axios.create({
        //     baseURL: API,
        //     timeout: 3000,
        //     headers: {'Authorization': 'Bearer '+token}
        // });
        // const isLoggedIn = localStorage.getItem("token") != null ? localStorage.getItem("id") : null;
        
        // if(isLoggedIn === null){
        //     alert("You must log in to add this recipe to favourited list");
        //     window.location = '/signUp';
        // }
        // else {
        //     const res = await axiosInstance.post(API + '/recipes/comment/' + id , {
        //         comment : comment,
        //         image : image
        //     })
        //     if ( res.data === null ){
        //         alert("SOME THING IS WRONG!!!");
        //     }
        //     else{
        //         alert("Post comment successfully");
        //     }
        // }

        setCheckComment(true);
    }



    const [checkComment, setCheckComment] = useState(false);
    useEffect ( () => {
        const getComment = async () => {
            if (checkComment) {
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
                    // const convertBase64 = (file) => {
                    //     return new Promise((resolve, reject) => {
                    //       const fileReader = new FileReader();
                    //       fileReader.readAsDataURL(file)
                    //       fileReader.onload = () => {
                    //         resolve(fileReader.result);
                    //       }
                    //       fileReader.onerror = (error) => {
                    //         reject(error);
                    //       }
                    //     })
                    //   }
                      
                    // const base64 = await convertBase64(image);
                    const res = await axiosInstance.post(API + '/recipes/comment/' + id , {
                        content : comment,
                        // image : base64
                    })
                    if ( res.data === null ){
                        alert("SOME THING IS WRONG!!!");
                    }
                    else{
                        // alert("Post comment successfully");
                        setCheckComment(false);
                       setComment('');
                    }
                }
            }
        }
        const getRecipe = async () => {
            const res = await axios.get(API + '/recipes/' + id);
            setComments(res.data.comments);
        };
        getComment();
        getRecipe();
        console.log(comments);
    }, [checkComment])

    const authorInfor = {
        pathname: '/members/'+author._id,
        id: author._id
    }

    if (recipe !== undefined) {
        return (
          <div>
            <section className="recipe-blog" key={id}>
              <div className="container">
                <div className="recipe-infor flex flex-jc-sb">
                  <div className="recipe-item">
                    <div className="img-container">
                      <img
                        key={id}
                        src={`${recipe.image}`}
                        width="150"
                        height="150"
                        alt="recipe title"
                      ></img>
                    </div>
                    <div className="recipe-content">
                      <h1 className="recipe-content-title" key={id}>
                        {recipe.title}
                      </h1>
                      <div className="recipe-content-inner">
                        <h4>
                          <i className="fa fa-eyedropper">
                            <FaEyeDropper />
                          </i>
                          Description
                        </h4>
                        <p>{recipe.description}</p>
                      </div>
                      <hr></hr>

                      <div className="recipe-content-ingredients">
                        <h4>
                          <i className="fa fa-eyedropper">
                            <FaEyeDropper />
                          </i>
                          Ingredients
                        </h4>
                        <ul>
                          {ingredients.map((item, index) => {
                            return (
                              <div>
                                <li className="list-style" key={index}>
                                  {item.ingredient.name} : {item.quantity}{" "}
                                  {item.quantityType}
                                </li>
                              </div>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="recipe-content-steps">
                        <h4>
                          <i className="fa fa-sort-numeric-asc">
                            <FaSortNumericUpAlt />
                          </i>
                          Steps
                        </h4>
                        <ul>
                          {steps.map(function (item, index) {
                            return (
                              <div>
                                <div>Step {index + 1}</div>
                                <li className="list-style" key={index}>
                                  {item}
                                </li>
                              </div>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="author-item">
                    <div className="author-item-infor">
                      <ul>
                        <li className="author-avatar">
                          <img src={`${author.avatar}`} alt="fullname"></img>
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
                          <span>{moment(recipe.createdAt).format("L")}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="author-item-like">
                      {/* <ul>
                                        <li> */}
                      {checkLike ? (
                        <div className="button1">
                          <i
                            className="fa fa-heart"
                            aria-hidden="true"
                            onClick={onClickHeart}
                          >
                            <FaHeart />
                          </i>
                        </div>
                      ) : (
                        <div className="button2">
                          <i
                            className="fa-heart"
                            aria-hidden="true"
                            onClick={onClickHeart}
                          >
                            <FaHeart />
                          </i>
                        </div>
                      )}
                      {/* </li>
                                    </ul> */}
                    </div>

                    <div className="comment">
                      <div className="pannel-body">
                        <textarea
                          className="form-control"
                          id="CommentBox"
                          rows="2"
                          placeholder="What are you thinking?"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                        <div className="mar-top clearfix flex flex-jc-sb">
                          <div className="action1">
                            <input
                              accept="image/*"
                              id="icon-button-file"
                              type="file"
                              style={{ display: "none" }}
                            />
                            {/* <label htmlFor="icon-button-file">
                                                    <IconButton className='button' aria-label="upload picture"component="span">
                                                        <FaPhotoVideo />
                                                    </IconButton>
                                                </label> */}
                          </div>
                          <div className="action2">
                            <button
                              className="btn btn-sm btn-primary"
                              type="submit"
                              onClick={(e) => handleComment(e)}
                            >
                              <i className="fa fa-pencil fa-fw">
                                <FaPencilAlt />
                              </i>
                              Share
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="comments">
                      <ul>
                        {comments.map(function (item, index) {
                          const userInfor = {
                            pathname: "/members/" + item.user._id,
                            id: item.user._id,
                          };
                          return (
                            <div className="available-comment flex flex-jc-sb">
                              <div className="media-left">
                                <a className="media-left" href="#">
                                  <img
                                    className="img-circle img-sm"
                                    alt="Profile Picture"
                                    src={`${item.user.avatar}`}
                                  ></img>
                                </a>
                              </div>
                              <div className="media-right">
                                <div className="mar-btm">
                                  <Link to={userInfor}>
                                    {item.user.username}
                                  </Link>
                                  <p className="text-muted text-sm">
                                    <i className="fa fa-mobile fa-lg">
                                      <FaMobile />
                                    </i>
                                    From 11m
                                  </p>
                                </div>
                                <p>{item.content}</p>
                                <hr />
                              </div>
                            </div>
                          );
                        })}
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
