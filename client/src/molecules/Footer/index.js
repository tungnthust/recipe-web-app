import React from "react";
import './index.css';

import Icon from "../../atoms/Icon/Icon";

const Footer = () =>{

    return (
      <div className="App-footer" style={styleFixedBottom}>
        <div className="footer-container">
          <div className="footer-content flex flex-jc-c flex-ai-c">
            <h4>Food Recipe Website - Group 10 - MoSD</h4>
            <ul className="flex flex-jc-c flex-ai-c">
              <Icon name="fb"/>
              <Icon name="gg"/>
              <Icon name="ins"/>
              <Icon name="tw"/>
              <Icon name="yt"/>
            </ul>
          </div>
        </div>
      </div>
    );
}


var styleFixedBottom = {
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "auto",
    width: "100%",
  }

export default Footer;