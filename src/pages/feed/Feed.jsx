import React, { useState, useEffect } from "react";

import Navbar from "../../components/navbar/Navbar";
import FeedMainComponent from "../../components/feed/FeedMainComponent";

import "./feed.css";

function Feed() {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("feedData")) || [];
    setFeedData(data);
  }, []);

  const createPost = (user, body, img) => {
    const date = new Date();
    const formatDate = (date) => {
      const options = { day: "2-digit", month: "short", year: "numeric" };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    };
    const newPost = {
      id: Date.now(),
      user,
      body,
      img,
      created_at: formatDate(),
      likes: [],
    };
    setFeedData((prevData) => [...prevData, newPost]);
  };

  const updatePost = (id, updatedPostData) => {
    setFeedData((prevData) =>
      prevData.map((post) => (post.id === id ? updatedPostData : post))
    );
  };

  const deletePost = (id) => {
    setFeedData((prevData) => prevData.filter((post) => post.id !== id));
  };

  useEffect(() => {
    if (feedData.length !== 0) {
      localStorage.setItem("feedData", JSON.stringify(feedData));
    }
  }, [feedData]);

  const getAllPosts = () => {
    return feedData;
  };

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "10rem" }}>
        <FeedMainComponent
          getAllPosts={getAllPosts}
          createPost={createPost}
          updatePost={updatePost}
          deletePost={deletePost}
        />
      </div>
    </div>
  );
}

export default Feed;
