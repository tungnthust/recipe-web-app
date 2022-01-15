import React from "react";
import './index.css';
import Title from "../../atoms/Title/Title";
import ItemList from "./ItemList";
import Button from "../../atoms/Button/Button";

const QuickFilterMB = () =>{
    return(
        <div className="filter_container">
            <div className="title mobile">
                <Title title='Quick Filter'/>
                <Button type="link" link='/recipes' name="All categories"/>
            </div>
            <ItemList class_name="list mobile"/>
        </div>
    )
}

export default QuickFilterMB