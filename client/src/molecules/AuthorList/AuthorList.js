import React from "react";
import Title from "../../atoms/Title/Title";
import AuthorCard from "../../atoms/Card/AuthorCard/AuthorCard";
import MemberTitle from "../../atoms/MemberTitle/MemberTitle";

const AuthorList = (props) => {
  const { list, mode } = props;
  return (
    <div className="container">
      {mode === "home" ? (
        <div className="title">
          <Title title="Top Rated Authors" />
        </div>
      ) : (
        <MemberTitle />
      )}
      <div className="row">
        {list.map((data, key) => {
          return (
            <div key={key} id="one_third">
              <br />
              <br />
              <AuthorCard
                key={key}
                id={data._id}
                avatar={data.avatar}
                name={data.name}
                time={data.createdAt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AuthorList;
