import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Details from "./Details";
import Loading from "../common/Loading";

const Post = ({ history, post, loading }) => {
  if (!loading) {
    if (post !== undefined) {
      return (
        <div className="Post card">
          <h1 className="hind bold">{post.title}</h1>
          <Details post={post} />
          <div className="content-styled">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          <i
            className="material-icons goBack shake shake-slow-small"
            onClick={() => history.push("/")}
          >
            keyboard_arrow_left
          </i>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  } else {
    return <Loading />;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;

  if (posts !== undefined) {
    for (let post in posts) {
      if (posts[post].id === id)
        return { ...ownProps, post: posts[post], loading: false };
    }
  } else {
    return { ...ownProps, loading: true };
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(Post);
