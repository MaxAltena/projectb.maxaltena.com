import React from "react";
import { Link } from "react-router-dom";

const FeedPost = () => {
  return (
    <div className="FeedPost card">
      <div className="card-content">
        <span className="card-title hind bold">FeedPost titel</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          accusantium, quis culpa illo optio inventore. Hic mollitia ducimus
          possimus. Corrupti consequuntur animi esse eius tempore fugiat
          reiciendis minus dolores excepturi.{" "}
          <Link to="/post/id">Verder lezen...</Link>
        </p>
      </div>
      <div className="card-action">
        <div className="info hide-on-small-only">
          <img
            src="https://www.gravatar.com/avatar/2bd431953d5fdbf5bc245dce12944a9b"
            alt="Auteur"
            className="circle"
          />
          <div>
            <span>Auteur</span>
            <span>Max Altena</span>
          </div>
          <div>
            <span>Gepubliceerd op</span>
            <span>2 Maart 2019</span>
          </div>
        </div>
        <div className="info hide-on-med-and-up">
          <img
            src="https://www.gravatar.com/avatar/2bd431953d5fdbf5bc245dce12944a9b"
            alt="Auteur"
            className="circle"
          />
          <div>
            <span>Max Altena</span>
            <span>2 Maart 2019</span>
          </div>
        </div>
        <Link to="/post/id" className="btn-flat waves-effect">
          Lees bericht
        </Link>
      </div>
    </div>
  );
};

export default FeedPost;
