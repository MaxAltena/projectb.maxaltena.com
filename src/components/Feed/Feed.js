import React from "react";
import FeedPost from "./FeedPost";
import Add from "../common/Add";
import { connect } from "react-redux";

const Feed = ({ history, posts, auth }) => {
  return (
    <div className="Feed">
      {posts !== undefined ? (
        posts.map(post => {
          return <FeedPost post={post} key={post.id} />;
        })
      ) : (
        <div className="center">Nog geen berichten...</div>
      )}
      {!auth.isEmpty ? <Add history={history} /> : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Feed);
