import React from "react";
import './author.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar1 from '../../Components/Navbar1';
import Navbar2 from '../../Components/Navbar2';
import Footer from '../../Components/Footer';
import { Collapse, Card } from 'bootstrap-4-react';
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
                                    <img src= 'https://nhatbanonline.net/wp-content/uploads/2020/02/co-4-la-may-man-3.jpg' width="150" height="150" alt="Avatar" className="avatar"></img>
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
                            {/* <ul className="nav nav-tabs" role="tablist">
                                                <li role="presentation" active>
                                                    <a href="#tab_about" role="tab" data-toggle="tab">About Author</a>
                                                </li>
                                                <li role="presentation">
                                                    <a href="#tab_recipies" role="tab" data-toggle="tab">Author Recipes</a>
                                                </li>
                                                <li role="presentation">
                                                    <a href="#tab_fav_recipies" role="tab" data-toggle="tab">Favourited Recipes</a>
                                                </li>
                            </ul> */}

                            <div id="accordionExample" className="right-part">
                                <Card>
                                    <Card.Header mb="0">
                                        <Collapse.Button link target="#collapseOne" id="headingOne" aria-expanded="true" className="collapse-button">
                                        About Author
                                        </Collapse.Button>
                                    </Card.Header>
                                    <Collapse id="collapseOne" show aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <Card.Body>
                                         To la ha beo, an nhieu nhat day
                                        </Card.Body>
                                    </Collapse>
                                </Card>

                                <Card>
                                    <Card.Header mb="0">
                                        <Collapse.Button link target="#collapseTwo" id="headingTwo" aria-expanded="false" className="collapse-button">
                                        About Recipes
                                        </Collapse.Button>
                                    </Card.Header>
                                    <Collapse id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <Card.Body>

                                        <div className="white-block2">
                                            <div className="content-inner">
                                                <h4 className="no-top-margin">ha's recipes</h4>
                                                <hr/>
                                                {/* <p className="pretable-loading">Loading...</p> */}
                                                <div className="bt-table">
                                                    <div className="boostrap-table">
                                                        <div className="fixed-table-toolbar">
                                                            <div className="pull-left-search">
                                                                {/* add it to input onChange={this.handleChangeRecipeTitle} */}
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
                                

                                        </Card.Body>
                                    </Collapse>
                                </Card>

                                <Card>
                                    <Card.Header mb="0">
                                        <Collapse.Button link target="#collapseThree" id="headingThree" aria-expanded="false"  className="collapse-button">
                                        Favourited Recipes
                                        </Collapse.Button>
                                    </Card.Header>
                                    <Collapse id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <Card.Body>
                                            
                                            <div className="white-block2">
                                                <div className="content-inner">
                                                    <h4 className="no-top-margin">ha's favorite recipes</h4>
                                                    <hr/>
                                                    {/* <p className="pretable-loading">Loading...</p> */}
                                                    <div className="bt-table">
                                                        <div className="boostrap-table">
                                                            <div className="fixed-table-toolbar">
                                                                <div className="pull-left-search">
                                                                    {/* add it to input onChange={this.handleChangeRecipeTitle} */}
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
                                        </Card.Body>
                                    </Collapse>
                                </Card>
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