import React from "react";
import './index.css';
import FilterListIcon from '@material-ui/icons/FilterList';
import { green } from "@material-ui/core/colors";
import ItemList from "./ItemList";

const QuickFilterPC = () =>{
    return(
        <div className="filter_container">
            <div className="title pc">
                <div className="name">
                    <FilterListIcon style={{color:green[500]}}/>
                    Quick Filter
                </div>
                <button className="btn">All catagories</button>
            </div>
            <ItemList class_name="list pc"/>
        </div>
    )
}

export default QuickFilterPC;