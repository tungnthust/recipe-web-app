
import {React, useState, useEffect} from "react";
import './author.css';

import Navbar1 from "../../../Components/Navbar1";
import Navbar2 from "../../../Components/Navbar2";
import Footer from "../../../Components/Footer";
import {Button} from "@material-ui/core";
import { FaHeart, FaCalendar, FaBook}  from 'react-icons/fa';
import { useParams } from 'react-router';
import axios from "axios";
import {Link} from 'react-router-dom'

const API = "http://localhost:4000";

const ChangeInforPage = (props) =>{
    const { id } = useParams();
    props = id;
    console.log(id);
    // const [name, setName] = useState("");
    const[arrayOwnRecipes, setArray1] = useState([]);
    const[arrayFavoritedRecipes, setArray2] = useState([]);
    const [member, setMember] = useState({});
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState(null);

    const [filter, setFilter] = useState('');

    useEffect(() => {
        const getRecipe = async () => {
          const res = await axios.get(API + "/members/" + id);
          const item = res.data;
            const newDate = new Date(item.createdAt);
            const day = newDate.getDate();
            const month = newDate.getMonth()+1;
            const year = newDate.getFullYear();
            item.createdAt = day+'-'+month+'-'+year;
          setMember(item);
          setArray1(item.own_recipes); 
          setArray2(item.favourited_recipes); 
        //   console.log(item.avatar);
        };
        getRecipe();
        // console.log(member);
        // console.log(arrayOwnRecipes);
      }, []);

      const handleChange = async (event) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem("token");

            const axiosInstance = axios.create({
            baseURL: API,
            timeout: 3000,
            headers: {'Authorization': 'Bearer '+token}
        });
            // const file = event.target.files[0]
            // 
            // console.log(base64)
            

            const convertBase64 = (file) => {
                return new Promise((resolve, reject) => {
                  const fileReader = new FileReader();
                  fileReader.readAsDataURL(file)
                  fileReader.onload = () => {
                    resolve(fileReader.result);
                  }
                  fileReader.onerror = (error) => {
                    reject(error);
                  }
                })
              }
              
            const base64 = await convertBase64(avatar)
            console.log(base64)

          const res = await axiosInstance.patch("http://localhost:4000/members/"+ id, {            
            name: name,
            avatar: base64,            
          });
         
          let resData = res.data;          

          console.log(resData);
          if(resData!==null){
            window.location.reload();
            //   window.alert('Change successful');
          }
        } catch(e) {
          window.alert(e.response.data["message"]);
        }
        
      };

      
    
if (member !== undefined) {
    return(
        <div className = "author">
            
            <Navbar1/>
            
            <Navbar2/>
            
            <section className="author-container">
                <div className="container">
                    <div className="row">
                        <div className="white-block" >
                            <div className="my-sidebar">
                                <div className="my-avatar" >
                                {console.log(member.avatar)}
                                    <img src={`${member.avatar}`} onError={(e)=>{e.target.onerror = null; e.target.src="https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"}} width="150" height="150" alt="Avatar"/>
                                    <h4>{member.name}</h4>
                                    <ul className="list-unstyled list-inline post-share"></ul>
                                </div>

                                <ul className="my-menu">
                                                            <li>
                                                                <div href="/" className="clearfix">
                                                                    <i className="fa-calendar"><FaCalendar/></i>
                                                                    Participating date 
                                                                    <span className="right-value">{member.createdAt}</span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div href="/" className="clearfix">
                                                                    <i className="fa-book"><FaBook/></i>
                                                                    Recipes 
                                                                    <span className="right-value">{arrayOwnRecipes.length}</span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div href="/" className="clearfix">
                                                                    <i className="fa-heart"><FaHeart/></i>
                                                                    Number of Likes
                                                                    <span className="right-value"> {member.numOfFavourite}</span>
                                                                </div>
                                                            </li>
                                </ul>
                            </div>
                        </div>
                    
                    
                    
                    
                    
                        <div className="col-sm-9" >
                            

                            <div class="accordion" id="accordionExample" className="right-part">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    About Author 
                                    </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body" className='changeInforCon'>
                                        
                                        <div className="changeInfor">
                                            <form onSubmit={(e) => handleChange(e)}>
                                                <h2 >Change Infor</h2>
                                                <hr/>
                                                <label>New Name</label>
                                                <input  onChange={(e) => setName(e.target.value)}/>
                                                <label>New Avatar</label>

                                                <input type="file" id="myFile" name="filename" onChange={(e) => setAvatar(e.target.files[0])}></input>

                                                <div className="btnChange">
                                                    <Button type='submit' variant='contained' color="primary">Change</Button>
                                                </div>
                                            </form>
                                                
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        About Recipes
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                    <div className="white-block2">
                                            <div className="content-inner">
                                                <hr/>
                                                <div className="bt-table">
                                                    <div className="boostrap-table">
                                                        <div className="fixed-table-toolbar">
                                                            <div className="pull-left-search">
                                                                <input className="form-control" type="text" value={filter} onChange={event => setFilter(event.target.value)}  placeholder="Search for Recipes..."></input>
                                                            </div>
                                                        </div>
                                                        <div className="fixed-table-container">
                                                            <div className="fixed-table-header">
                                                                <table></table>
                                                            </div>
                                                            <div className="fixed-table-body">
                                                                <table data-toggle="table" data-search-align="left" data-search="true" data-classes="table table-striped" className="table table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th >
                                                                                <div className="th-inner">Image</div>
                                                                                <div className="fht-cell"></div>
                                                                            </th>
                                                                            <th>
                                                                                <div className="th-inner sortable">Name</div>
                                                                                <div className="fht-cell"></div>
                                                                            </th>
                                                                            <th>
                                                                                <div className="th-inner">Category</div>
                                                                                <div className="fht-cell"></div>
                                                                            </th>
                                                                            <th>
                                                                                <div className="th-inner">Difficulty</div>
                                                                                <div className="fht-cell"></div>
                                                                            </th>
                                                                            {/* <th>
                                                                                <div className="th-inner"></div>
                                                                                <div className="fht-cell"></div>
                                                                            </th> */}
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody >
                                                                        {
                                                                            arrayOwnRecipes.filter(f => f.title.toLowerCase().includes(filter.toLowerCase()) || filter === '').map(recipe => {       
                                                                                const recipeInfor = {
                                                                                    pathname: '/recipes/'+recipe._id,
                                                                                    id:recipe._id
                                                                                };
                                                                                const recipeUpdate = {
                                                                                    pathname: '/update',
                                                                                    recipeID:recipe._id,
                                                                                }
                                                                                return <tr className="no-records-found" > 
                                                                                
                                                                                    <th >
                                                                                        <Link to={recipeInfor}>
                                                                                            <div className="th-inner-route">
                                                                                                {/* <img src={recipe.image} alt={recipe.title} width="120" height="80"></img> */}
                                                                                                <img src={`${recipe.image}`} onError={(e)=>{e.target.onerror = null; e.target.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqjnW3exxJNLtPV7reKRCjjELkyXcO4a_1Q&usqp=CAU"}} width="120" height="80"/>

                                                                                            </div>
                                                                                        </Link>
                                                                                        <div className="fht-cell"></div>
                                                                                        
                                                                                    </th>
                                                                                    <th>
                                                                                        <Link to={recipeInfor}>
                                                                                        <div className="th-inner-route sortable">{recipe.title}</div>
                                                                                        </Link>
                                                                                        <div className="fht-cell"></div>
                                                                                        
                                                                                    </th>
                                                                                    <th>
                                                                                        <div className="th-inner">{recipe.category}</div>
                                                                                        <div className="fht-cell"></div>
                                                                                    </th>
                                                                                    <th>
                                                                                        <div className="th-inner">{recipe.difficulty}</div>
                                                                                        <div className="fht-cell"></div>
                                                                                    </th>
                                                                                    
                                                                                    {/* <th>
                                                                                        <button class="button-heart" onClick={onClickHeart}>
                                                                                            <i className="icon-heart" aria-hidden="true"><FaHeart/></i>

                                                                                        </button>
                                                                                        <div className="fht-cell"></div>
                                                                                        
                                                                                    </th> */}
                                                                                    
                                                                                
                                                                                </tr>
                                                                            }                                               
                                                                        )                     
                                                                        }    
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="fixed-table-pagination"></div>
                                                        </div>
                                                    </div>
                                                <div className="clearfix"></div> 
                                                </div>
                                            </div>
                                    </div>                                    
                                    </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Favourited Recipes
                                    </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                    <div className="white-block2">
                                                <div className="content-inner">
                                                    <hr/>
                                                    <div className="bt-table">
                                                        <div className="boostrap-table">
                                                            <div className="fixed-table-toolbar">
                                                                <div className="pull-left-search">
                                                                    <input className="form-control" type="text" value={filter} onChange={event => setFilter(event.target.value)} placeholder="Search for Recipes..."></input>
                                                                </div>
                                                            </div>
                                                            <div className="fixed-table-container">
                                                                <div className="fixed-table-header">
                                                                    <table></table>
                                                                </div>
                                                                <div className="fixed-table-body">
                                                                    <table data-toggle="table" data-search-align="left" data-search="true" data-classes="table table-striped" className="table table-striped">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>
                                                                                    <div className="th-inner">Image</div>
                                                                                    <div className="fht-cell"></div>
                                                                                </th>
                                                                                <th>
                                                                                    <div className="th-inner sortable">Name</div>
                                                                                    <div className="fht-cell"></div>
                                                                                </th>
                                                                                <th>
                                                                                    <div className="th-inner">Category</div>
                                                                                    <div className="fht-cell"></div>
                                                                                </th>
                                                                                <th>
                                                                                    <div className="th-inner">Difficulty</div>
                                                                                    <div className="fht-cell"></div>
                                                                                </th>
                                                                                {/* <th>
                                                                                    <div className="th-inner"></div>
                                                                                    <div className="fht-cell"></div>
                                                                                </th> */}
                                                                            </tr>
                                                                        </thead>

                                                                            <tbody >
                                                                            {
                                                                            arrayFavoritedRecipes.filter(f => f.title.toLowerCase().includes(filter.toLowerCase()) || filter === '').map(recipe => {       
                                                                                const recipeInfor = {
                                                                                    pathname: '/recipes/'+recipe._id,
                                                                                    id:recipe._id
                                                                                };
                                                                                const recipeUpdate = {
                                                                                    pathname: '/update',
                                                                                    recipeID:recipe._id,
                                                                                }
                                                                                                                                        
                                                                        
                                                                                return    <tr className="no-records-found" >
                                                                                            <th>
                                                                                                <Link to={recipeInfor}>
                                                                                                    <div className="th-inner-route">
                                                                                                        {/* <img src={recipe.image} alt={recipe.title} width="120" height="80"></img> */}
                                                                                                        <img src={`${recipe.image}`} onError={(e)=>{e.target.onerror = null; e.target.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqjnW3exxJNLtPV7reKRCjjELkyXcO4a_1Q&usqp=CAU"}} width="120" height="80"/>
                                                                                                    </div>
                                                                                                </Link>
                                                                                                <div className="fht-cell"></div>
                                                                                                
                                                                                            </th>
                                                                                            <th>
                                                                                                <Link to={recipeInfor}>
                                                                                                <div className="th-inner-route sortable">{recipe.title}</div>
                                                                                                </Link>
                                                                                                <div className="fht-cell"></div>
                                                                                                
                                                                                            </th>
                                                                                            <th>
                                                                                                <div className="th-inner">{recipe.category}</div>
                                                                                                <div className="fht-cell"></div>
                                                                                            </th>
                                                                                            <th>
                                                                                                <div className="th-inner">{recipe.difficulty}</div>
                                                                                                <div className="fht-cell"></div>
                                                                                            </th>
                                                                                            
                                                                                            {/* <th>
                                                                                                <button class="button-heart">
                                                                                                    <i className="icon-heart" aria-hidden="true"><FaHeart/></i>

                                                                                                </button>
                                                                                                <div className="fht-cell"></div>
                                                                                                
                                                                                            </th> */}
                                                                                            
                                                                                        
                                                                                        </tr>                     
                                                                                    }                                               
                                                                                )                     
                                                                            }  
                                                                            </tbody>

                                                                        </table>
                                                                    </div>
                                                                    <div className="fixed-table-pagination"></div>
                                                                </div>
                                                            </div>
                                                        <div className="clearfix"></div> 
                                                    </div>
                                                </div>
                                            </div>                                    

                                    </div>
                                    </div>
                                </div> 
                            </div>  

                            

                                                     

                            

                        </div>




                    </div>
                </div>
            </section>
            
            
            <Footer/>
            
        </div>
    )
} else {
    return <div>Loading</div>;
  }

}

export default ChangeInforPage;