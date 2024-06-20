import React from "react";

import FeedBody from "./FeedBody";
import Forcast from "./Forcast";
import AskQuestion from "./AskQuestion";

function FeedMainComponent({
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
}) 
{
  return (
    <>
      <div style={{overflow:'hidden'}}>
        <div className="feed-container">
          <div id="live_feeds">
            <FeedBody getAllPosts={getAllPosts} updatePost={updatePost} deletePost={deletePost} />
          </div>
          <div id="weather">
            <Forcast />
          </div>
        </div>
        <div className="ask_question">
          <AskQuestion createPost={createPost} />
        </div>
      </div>
    </>
  );
}

export default FeedMainComponent;
