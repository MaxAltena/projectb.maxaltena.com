import React from "react";
import FeedPost from "./FeedPost";

const Feed = ({ posts }) => {
  return (
    <div className="Feed">
      {posts.length > 0 ? (
        posts.map(post => {
          return <FeedPost post={post} key={post.id} />;
        })
      ) : (
        <div className="center">Nog geen berichten</div>
      )}
    </div>
  );
};

export default Feed;
