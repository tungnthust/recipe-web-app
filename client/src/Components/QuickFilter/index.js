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
                <item>
                    <a class="link" href="/">
                        <icon_box>
                            <FaBeer/>
                        </icon_box>
                        Beer
                    </a>
                </item>
                <item>
                    <a class="link" href="/">
                        <icon_box>
                            <FaBreadSlice/>
                        </icon_box>
                        Breads
                    </a>
                </item>
                <item>
                    <a class="link" href="/">
                        <icon_box>
                            <FaHamburger/>
                        </icon_box>
                        Hamburger
                    </a>
                </item>
                <item>
                    <a class="link" href="/">
                        <icon_box>
                            <FaIceCream/>
                        </icon_box>
                        Ice cream
                    </a>
                </item>
                <item>
                    <a class="link" href="/">
                        <icon_box>
                            <FaPizzaSlice/>
                        </icon_box>
                        Dessert
                    </a>
                </item>
                <item>
                    <a class="link" href="/">
                        <icon_box>
                            <FaSeedling/>
                        </icon_box>
                        Vegetarian
                    </a>
                </item>
                <item>
                    <a class="link" href="/">
                        <icon_box>
                            <FaBacon/>
                        </icon_box>
                        Meat
                    </a>
                </item>
                <item>
                    <a class="link" href="/">
                        <icon_box>
                            <FaFish/>
                        </icon_box>
                        Fish
                    </a>
                </item>
                <item>
                    <a class="link" href="/">
                        <icon_box>
                            <FaEgg/>
                        </icon_box>
                        Egg
                    </a>
                </item>
            </div>
        </div>
    )
}

export default QuickFilter;