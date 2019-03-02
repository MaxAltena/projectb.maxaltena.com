import React from "react";
import FeedPost from "./FeedPost";

const Feed = ({ posts }) => {
  return (
    <div className="Feed">
      {posts.map(post => {
        return <FeedPost post={post} key={post.id} />;
      })}
    </div>
  );
};

export default Feed;
