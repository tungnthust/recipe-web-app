import { React,useState } from "react";
import {Button} from "@material-ui/core";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

const Contact = () =>{

    return(
        <section className="contact-container">

            <div class="container">
                    <div class="col-md-7 offset-md-2">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.640944302602!2d105.840947314883!3d21.00702528601013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac76ccab6dd7%3A0x55e92a5b07a97d03!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1621327746381!5m2!1svi!2s" width="900" height="450" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div class="col-md-8 offset-md-2 card card-body bg-light mb-4">
                        <div className="contact" class="jumbotron well">
                            <h3 className="contact__title">Contact us</h3>
                            <hr/>
                            <form>
                            <div class="form-group">
                                <label for="Name">Your name</label>
                                <input type="email" class="form-control" id="Name" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="emailAddress">Email address</label>
                                <input type="email" class="form-control" id="emailAddress" placeholder="name@example.com" />
                            </div>
                            <div class="form-group">
                                <label for="topic">Topics</label>
                                <select id="topic" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>Accounts</option>
                                    <option>Recipes</option>
                                    <option>Members</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="message">Your message</label>
                                <textarea class="form-control" id="message" rows="3" placeholder="Just put some of your thought here"></textarea>
                            </div>
                            
                            <button type="button" class="btn btn-success mt-3">Send</button>
                            </form>
                        </div>
                    </div>
            </div>
            </section>     
    )
}
export default Contact; 