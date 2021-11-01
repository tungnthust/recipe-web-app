import React from "react";
import './index.css';
import FilterListIcon from '@material-ui/icons/FilterList';
import { green } from "@material-ui/core/colors";

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
            </div>
        </div>
    )
}

export default QuickFilter;