import React from "react";
import moment from "moment";
import "moment/locale/nl";
import Share from "./Share";

const Details = ({ post }) => {
  return (
    <div className="Details">
      <img src={post.image} alt="Auteur" className="circle" />
      <div>
        <span>Auteur</span>
        <span>{post.author}</span>
      </div>
      <div>
        <span>Gepubliceerd</span>
        <span>{moment(post.date.toDate()).calendar()}</span>
      </div>
      <Share post={post} classes="hide-on-med-and-down" />
      <Share post={post} classes="hide-on-large-only" />
    </div>
  );
};

export default Details;
