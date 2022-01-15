import { React,useState } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';
import Button from "../../atoms/Button/Button";

const API = "http://localhost:4000/api";

const Contact = () =>{
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [topic,setTopic] = useState("");
    const [message, setMessage] = useState("");
    const submitContact = async (user) => {
        user.preventDefault();
        try {
            const res = await axios.post(API + "/contact", {
            name: name,
            topic: topic,
            email: email,
            message: message
            });
            if (res.status === 200) {
                window.alert("We received your feedback and will get back to you soon!")
                window.location.reload();
            }
        } catch (err) {
            window.alert("Sorry, something went wrong and we cannot receive your feedback!");
        }
        };

    return (
      <section className="contact-container">
        <div className="container">
          <div className="col-md-7 offset-md-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.640944302602!2d105.840947314883!3d21.00702528601013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac76ccab6dd7%3A0x55e92a5b07a97d03!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1621327746381!5m2!1svi!2s"
              width="900"
              height="450"
              allowfullscreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </div>
          <div className="col-md-8 offset-md-2 card card-body bg-light mb-4">
            <div className="contact jumbotron well">
              <h3 className="contact__title">Contact us</h3>
              <hr />
              <form onSubmit={(e) => submitContact(e)}>
                <div className="form-group">
                  <label for="Name">Your name</label>
                  <input
                    className="form-control"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    id="Name"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label for="emailAddress">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailAddress"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                  />
                </div>
                <div className="form-group">
                  <label for="topic">Topics</label>
                  <select
                    id="topic"
                    className="form-select"
                    value={topic}
                    required
                    onChange={(e) => setTopic(e.target.value)}
                  >
                    <option selected>Choose...</option>
                    <option>Accounts</option>
                    <option>Recipes</option>
                    <option>Members</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="message">Your message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    value={message}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Just put some of your thought here"
                  ></textarea>
                </div>
                <Button type="button_submit" name="Send" handleFunction={submitContact}/>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Contact; 