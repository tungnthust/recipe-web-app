import React from 'react';
import './Label.css';

const Label = (props) =>{
    const {name} = props;
    return(
        <label>{name}</label>
    )
}
export default Label;