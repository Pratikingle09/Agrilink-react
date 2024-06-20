import React from "react";
import PropTypes from 'prop-types';



import GetAllPost from "./GetAllPost";
import samplePosts from '../../utils/feed/FeedData'

function FeedBody({ getAllPosts, updatePost, deletePost }) {
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleDelete=(id)=>{
    deletePost(id)
  }

  const posts = getAllPosts();

  if (posts.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <GetAllPost key={post.id} post={post} updatePost={updatePost} deletePost={handleDelete} />
      ))}
    </div>
  );
}
FeedBody.propTypes = {
  updatePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default FeedBody;
