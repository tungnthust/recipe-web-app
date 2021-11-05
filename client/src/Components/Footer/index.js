import React from "react";
import './index.css';

import {FaFacebook, FaGooglePlus, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

const Footer = () =>{

    return(
        <div className="App-footer">
            <div className="footer-container">
                <div className="footer-content flex flex-jc-sb flex-ai-c">
                <h4>Food Recipe Website - Group 10 - MoSD</h4>
                <ul className="flex flex-jc-c flex-ai-c">
                    <li><a href="https://www.facebook.com/ha.hoangthuy.9" target="_blank" className="footer-link"><i className="fa fa-facebook" aria-hidden="false">
                            <FaFacebook/>
                    </i></a></li>
                    <li><a href="https://www.facebook.com/ha.hoangthuy.9" target="_blank" className="footer-link"><i className="fa fa-google-plus" aria-hidden="true">
                        <FaGooglePlus/>
                    </i></a></li>
                    <li><a href="https://www.facebook.com/ha.hoangthuy.9" target="_blank" className="footer-link"><i className="fa fa-instagram" aria-hidden="true">
                        <FaInstagram/>
                    </i></a></li>
                    <li><a href="https://www.facebook.com/ha.hoangthuy.9" target="_blank" className="footer-link"><i className="fa fa-twitter" aria-hidden="true">
                        <FaTwitter/>
                    </i></a></li>
                    <li><a href="https://www.facebook.com/ha.hoangthuy.9" target="_blank" className="footer-link"><i className="fa fa-youtube" aria-hidden="true">
                        <FaYoutube/>
                    </i></a></li>
                </ul>
                </div>
            </div>
        </div>

    )
}

export default Footer;