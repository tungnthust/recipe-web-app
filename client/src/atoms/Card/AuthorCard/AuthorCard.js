import React from "react";
import { Link } from "react-router-dom";
import "./AuthorCard.css";

const AuthorCard = (props) => {
  const { id, avatar, name, time } = props;

  const memberInfo = {
    pathname: "/members/" + id,
    id: id,
  };

  return (
    <div className="col">
      <div className="white-block member-block">
        <Link to={memberInfo} className="member-avatar">
          <img
            src={`${avatar}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg";
            }}
            width="150"
            height="150"
            alt="Avatar"
          />
        </Link>

        <div className="member-holder">
          <Link to={memberInfo} className="blog-title">
            <h5>{name}</h5>
          </Link>
          <ul>
            <li> Joined in: {time}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AuthorCard;
