import React from "react";
import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./Icon.css";

const Icon = (props) => {
  const { name } = props;
  switch (name) {
    case "fb":
      return (
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <i className="fa fa-facebook" aria-hidden="false">
              <FaFacebook />
            </i>
          </a>
        </li>
      );
    case "gg":
      return (
        <li>
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <i className="fa fa-google-plus" aria-hidden="true">
              <FaGooglePlus />
            </i>
          </a>
        </li>
      );
    case "ins":
      return (
        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <i className="fa fa-instagram" aria-hidden="true">
              <FaInstagram />
            </i>
          </a>
        </li>
      );
    case "tw":
      return (
        <li>
          <a
            href="https://twitter.com/?lang=vi"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <i className="fa fa-twitter" aria-hidden="true">
              <FaTwitter />
            </i>
          </a>
        </li>
      );
    case "yt":
      return (
        <li>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <i className="fa fa-youtube" aria-hidden="true">
              <FaYoutube />
            </i>
          </a>
        </li>
      );
    default:
      return(
        <></>
      )
  }
};

export default Icon;
