import React from "react";
import './author.css';

import Navbar1 from "../../../Components/Navbar1";
import Navbar2 from "../../../Components/Navbar2";
import Footer from "../../../Components/Footer";
import {Button} from "@material-ui/core";
import { FaHeart, FaCalendar, FaBook}  from 'react-icons/fa';


const AuthorPage = () =>{
    return(
        <div className = "author">
            
            <Navbar1/>
            
            <Navbar2/>
            
            <section className="author-container">
                <div className="container">
                    <div className="row">
                        <div className="white-block" >
                            <div className="my-sidebar">
                                <div className="my-avatar">
                                    <img src= 'https://nhatbanonline.net/wp-content/uploads/2020/02/co-4-la-may-man-3.jpg' width="150" height="150" alt="Avatar"></img>
                                    <h4>Hoang Thuy Ha</h4>
                                    <ul className="list-unstyled list-inline post-share"></ul>
                                </div>

                                <ul className="my-menu">
                                                            <li>
                                                                <div href="/" className="clearfix">
                                                                    <i className="fa-calendar"><FaCalendar/></i>
                                                                    Participating date 
                                                                    <span className="right-value"> 24-11-2021</span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div href="/" className="clearfix">
                                                                    <i className="fa-book"><FaBook/></i>
                                                                    Recipes 
                                                                    <span className="right-value"> 3</span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div href="/" className="clearfix">
                                                                    <i className="fa-heart"><FaHeart/></i>
                                                                    Favourited Recipes 
                                                                    <span className="right-value"> 0</span>
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
                                                <h2 >Change Infor</h2>
                                                <hr/>
                                                <label>New Name</label>
                                                <input/>
                                                <label>New Email</label>
                                                <input/>
                                                <label>New Avatar</label>
                                                <input type="file" id="myFile" name="filename"></input>
                                                {/* <input/> */}

                                                <div className="btnChange">
                                                    <Button type='submit' variant='contained' color="primary">Change</Button>
                                                </div>
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
                                                <h4 className="no-top-margin">ha's recipes</h4>
                                                <hr/>
                                                <div className="bt-table">
                                                    <div className="boostrap-table">
                                                        <div className="fixed-table-toolbar">
                                                            <div className="pull-left-search">
                                                                <input className="form-control" type="text"  placeholder="Search for Recipes..."></input>
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
                                                                            <th>
                                                                                <div className="th-inner"></div>
                                                                                <div className="fht-cell"></div>
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody >
                                                                        
                                                                        
                                                                                <tr className="no-records-found" >
                                                                                    <th >
                                                                                        <a href="/">
                                                                                            <div className="th-inner-route"><img src="https://img-global.cpcdn.com/recipes/3c872698969f85ec/400x400cq70/photo.jpg" alt="banh cuon" width="120" height="80"></img></div>
                                                                                        </a>
                                                                                        <div className="fht-cell"></div>
                                                                                        
                                                                                    </th>
                                                                                    <th>
                                                                                        <a href="/">
                                                                                        <div className="th-inner-route sortable">banh cuon</div>
                                                                                        </a>
                                                                                        <div className="fht-cell"></div>
                                                                                        
                                                                                    </th>
                                                                                    <th>
                                                                                        <div className="th-inner">Vegeterian</div>
                                                                                        <div className="fht-cell"></div>
                                                                                    </th>
                                                                                    <th>
                                                                                        <div className="th-inner">Medium</div>
                                                                                        <div className="fht-cell"></div>
                                                                                    </th>
                                                                                    
                                                                                    <th>
                                                                                        <button class="button-heart">
                                                                                            <i className="icon-heart" aria-hidden="true"><FaHeart/></i>

                                                                                        </button>
                                                                                        <div className="fht-cell"></div>
                                                                                        
                                                                                    </th>
                                                                                    
                                                                                
                                                                                </tr>                     
                                                                            
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
                                                    <h4 className="no-top-margin">ha's favorite recipes</h4>
                                                    <hr/>
                                                    <div className="bt-table">
                                                        <div className="boostrap-table">
                                                            <div className="fixed-table-toolbar">
                                                                <div className="pull-left-search">
                                                                    <input className="form-control" type="text"  placeholder="Search for Recipes..."></input>
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
                                                                                <th>
                                                                                    <div className="th-inner"></div>
                                                                                    <div className="fht-cell"></div>
                                                                                </th>
                                                                            </tr>
                                                                        </thead>

                                                                            <tbody >                                                        
                                                                        
                                                                                <tr className="no-records-found" >
                                                                                    <th>
                                                                                        <a href="/">
                                                                                            <div className="th-inner-route"><img src="https://img-global.cpcdn.com/recipes/3c872698969f85ec/400x400cq70/photo.jpg" alt="banh cuon" width="120" height="80"></img></div>
                                                                                        </a>
                                                                                        <div className="fht-cell"></div>
                                                                                        
                                                                                    </th>
                                                                                    <th>
                                                                                        <a href="/">
                                                                                        <div className="th-inner-route sortable">banh cuon</div>
                                                                                        </a>
                                                                                        <div className="fht-cell"></div>
                                                                                        
                                                                                    </th>
                                                                                    <th>
                                                                                        <div className="th-inner">Vegeterian</div>
                                                                                        <div className="fht-cell"></div>
                                                                                    </th>
                                                                                    <th>
                                                                                        <div className="th-inner">Medium</div>
                                                                                        <div className="fht-cell"></div>
                                                                                    </th>
                                                                                    
                                                                                    <th>
                                                                                        <button class="button-heart">
                                                                                            <i className="icon-heart" aria-hidden="true"><FaHeart/></i>

                                                                                        </button>
                                                                                        <div className="fht-cell"></div>
                                                                                        
                                                                                    </th>
                                                                                    
                                                                                
                                                                                </tr>                     
                                                                            
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
}

export default AuthorPage;