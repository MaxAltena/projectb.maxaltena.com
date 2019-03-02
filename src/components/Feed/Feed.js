import React from "react";
import FeedPost from "./FeedPost";

const posts = [
  {
    id: 1,
    title: "Titel 1",
    preview:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum accusantium, quis culpa illo optio inventore. Hic mollitia ducimus possimus. Corrupti consequuntur animi esse eius tempore fugiat reiciendis minus dolores excepturi.",
    image: "https://www.gravatar.com/avatar/2bd431953d5fdbf5bc245dce12944a9b",
    author: "Max Altena",
    date: "2 Maart 2019"
  },
  {
    id: 2,
    title: "Titel 2",
    preview:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum accusantium, quis culpa illo optio inventore. Hic mollitia ducimus possimus. Corrupti consequuntur animi esse eius tempore fugiat reiciendis minus dolores excepturi.",
    image: "https://www.gravatar.com/avatar/2bd431953d5fdbf5bc245dce12944a9b",
    author: "Max Altena",
    date: "3 Maart 2019"
  },
  {
    id: 3,
    title: "Titel 3",
    preview:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum accusantium, quis culpa illo optio inventore. Hic mollitia ducimus possimus. Corrupti consequuntur animi esse eius tempore fugiat reiciendis minus dolores excepturi.",
    image: "https://www.gravatar.com/avatar/2bd431953d5fdbf5bc245dce12944a9b",
    author: "Max Altena",
    date: "4 Maart 2019"
  },
  {
    id: 4,
    title: "Titel 4",
    preview:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum accusantium, quis culpa illo optio inventore. Hic mollitia ducimus possimus. Corrupti consequuntur animi esse eius tempore fugiat reiciendis minus dolores excepturi.",
    image: "https://www.gravatar.com/avatar/2bd431953d5fdbf5bc245dce12944a9b",
    author: "Max Altena",
    date: "5 Maart 2019"
  },
  {
    id: 5,
    title: "Titel 5",
    preview:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum accusantium, quis culpa illo optio inventore. Hic mollitia ducimus possimus. Corrupti consequuntur animi esse eius tempore fugiat reiciendis minus dolores excepturi.",
    image: "https://www.gravatar.com/avatar/2bd431953d5fdbf5bc245dce12944a9b",
    author: "Max Altena",
    date: "6 Maart 2019"
  }
];

const Feed = () => {
  return (
    <div className="Feed">
      {posts.map(post => {
        return <FeedPost post={post} key={post.id} />;
      })}
    </div>
  );
};

export default Feed;
