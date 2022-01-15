import React from "react";
import './index.css';
import ItemList from "./ItemList";
import Button from '../../atoms/Button/Button';
import Title from "../../atoms/Title/Title";

const QuickFilterPC = () =>{
    return(
        <div className="filter_container">
            <div className="title pc">
                <Title title='Quick Filter'/>
                <Button type="link" name="All categories" link='/recipes'/>
            </div>
            <ItemList class_name="list pc"/>
        </div>
    )
}

export default QuickFilterPC;