import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/nl";

const FeedPost = ({ post }) => {
  const { id, title, preview, image, author, date } = post;
  const displayDate = moment(date.toDate()).calendar();
  return (
    <div className="FeedPost card">
      <div className="card-content">
        <span className="card-title hind bold">{title}</span>
        <p>
          {preview} <Link to={`/bericht/${id}`}>Verder lezen...</Link>
        </p>
      </div>
      <div className="card-action">
        <div className="info hide-on-small-only">
          <img src={image} alt="Auteur" className="circle" />
          <div>
            <span>Auteur</span>
            <span>{author}</span>
          </div>
          <div>
            <span>Gepubliceerd</span>
            <span>{displayDate}</span>
          </div>
        </div>
        <div className="info hide-on-med-and-up">
          <img src={image} alt="Auteur" className="circle" />
          <div>
            <span>{author}</span>
            <span>{displayDate}</span>
          </div>
        </div>
        <Link to={`/bericht/${id}`} className="btn-flat waves-effect">
          Lees bericht
        </Link>
      </div>
    </div>
  );
};

export default FeedPost;
