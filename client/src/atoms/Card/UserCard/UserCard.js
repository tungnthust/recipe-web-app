import React from "react";
import { FaHeart, FaCalendar, FaBook } from "react-icons/fa";

const UserCard = (props) => {
  const { user,num_recipe } = props;
  return (
    <div className="white-block">
      <div className="my-sidebar">
        <div className="my-avatar">
          <img
            src={`${user.avatar}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg";
            }}
            width="150"
            height="150"
            alt="Avatar"
          />
          <h4>{user.name}</h4>
          <ul className="list-unstyled list-inline post-share"></ul>
        </div>

        <ul className="my-menu">
          <li>
            <div href="/" className="clearfix">
              <i className="fa-calendar">
                <FaCalendar />
              </i>
              Joined date
              <span className="right-value">{user.createdAt}</span>
            </div>
          </li>
          <li>
            <div href="/" className="clearfix">
              <i className="fa-book">
                <FaBook />
              </i>
              Number of Recipes
              <span className="right-value">{num_recipe}</span>
            </div>
          </li>
          <li>
            <div href="/" className="clearfix">
              <i className="fa-heart">
                <FaHeart />
              </i>
              Number of Likes
              <span className="right-value"> {user.numOfFavourite}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
