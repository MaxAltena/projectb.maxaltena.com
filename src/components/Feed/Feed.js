import React from "react";
import FeedPost from "./FeedPost";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const Feed = ({ posts }) => {
  return (
    <div className="Feed">
      {posts !== undefined ? (
        posts.map(post => {
          return <FeedPost post={post} key={post.id} />;
        })
      ) : (
        <div className="center">Nog geen berichten</div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.firestore.ordered.posts
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts", orderBy: ["date", "desc"] }])
)(Feed);
