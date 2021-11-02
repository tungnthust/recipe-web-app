import React from "react";
import './index.css';
import FilterListIcon from '@material-ui/icons/FilterList';
import { green } from "@material-ui/core/colors";
import { FaBeer,FaBreadSlice,FaHamburger,FaIceCream,FaPizzaSlice,FaSeedling,FaBacon,FaEgg,FaFish } from 'react-icons/fa';

const QuickFilter = () =>{
    return(
        <div className="filter_container">
            <div className="title">
                <div className="name">
                    <FilterListIcon style={{color:green[500]}}/>
                    Quick Filter
                </div>
                <button className="btn">All catagories</button>
            </div>
            <div className="list">
                <div className="list_item">
                    <a class="link" href="/">
                        <div className="icon_box">
                            <FaBeer color="green"/>
                        </div>
                        Beer
                    </a>
                </div>
                <div className="list_item">
                    <a class="link" href="/">
                        <div className="icon_box">
                            <FaBreadSlice color="green"/>
                        </div>
                        Breads
                    </a>
                </div>
                <div className="list_item">
                    <a class="link" href="/">
                        <div className="icon_box">
                            <FaHamburger color="green"/>
                        </div>
                        Hamburger
                    </a>
                </div>
                <div className="list_item">
                    <a class="link" href="/">
                        <div className="icon_box">
                            <FaIceCream color="green"/>
                        </div>
                        Ice cream
                    </a>
                </div>
                <div className="list_item">
                    <a class="link" href="/">
                        <div className="icon_box">
                            <FaPizzaSlice color="green"/>
                        </div>
                        Dessert
                    </a>
                </div>
                <div className="list_item">
                    <a class="link" href="/">
                        <div className="icon_box">
                            <FaSeedling color="green"/>
                        </div>
                        Vegetarian
                    </a>
                </div>
                <div className="list_item">
                    <a class="link" href="/">
                        <div className="icon_box">
                            <FaBacon color="green"/>
                        </div>
                        Meat
                    </a>
                </div>
                <div className="list_item">
                    <a class="link" href="/">
                        <div className="icon_box">
                            <FaFish color="green"/>
                        </div>
                        Fish
                    </a>
                </div>
                <div className="list_item">
                    <a class="link" href="/">
                        <div className="icon_box">
                            <FaEgg color="green"/>
                        </div>
                        Egg
                    </a>
                </div>
            </div>
        </div>
    )
}

export default QuickFilter;