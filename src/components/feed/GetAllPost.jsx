import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

import farmer from "../../assets/icon/farmer.png";
import seller from "../../assets/icon/seller.png";
import student from "../../assets/icon/student.png";
import edit from '../../assets/icon/pen.png';
import del from '../../assets/icon/delete.png';

import UpdatePopup from "./UpdatePopup";

function GetAllPost({ post, deletePost }) {
  const [like, setLike] = useState(false);
  const [ansCount, setAnsCount] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [likes, setLikes] = useState([]);

  const currentUser = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();

  const handleDelete = () => {
    deletePost(post.id);
  };

  useEffect(() => {
    const localAnswers = JSON.parse(localStorage.getItem("answers")) || [];
    const filteredAnswers = localAnswers.filter((ans) => ans.post_id === post.id);
    setAnsCount(filteredAnswers.length);

    const localPosts = JSON.parse(localStorage.getItem("feedData")) || [];
    const currentPost = localPosts.find(p => p.id === post.id);

    if (currentPost) {
      setLikes(currentPost.likes);
      if (currentPost.likes.includes(currentUser.id)) {
        setLike(true);
      }
    }
  }, [post.id, currentUser.id]);

  const handleLike = () => {
    const isLiked = likes.includes(currentUser.id);
  
    let updatedLikes;
    if (isLiked) {
      updatedLikes = likes.filter(userId => userId !== currentUser.id);
    } else {
      updatedLikes = [...likes, currentUser.id];
    }
  
    setLikes(updatedLikes);
    setLike(!isLiked);
  
    const localPosts = JSON.parse(localStorage.getItem("feedData")) || [];
    const updatedPosts = localPosts.map(p => {
      if (p.id === post.id) {
        return { ...p, likes: updatedLikes };
      }
      return p;
    });
    localStorage.setItem("feedData", JSON.stringify(updatedPosts));
  };
  

  const handleFunction = () => {
    if (typeof deletePost !== 'undefined') {
      return (
        <div className="option">
          <button onClick={() => setShowPopup(true)}><img src={edit} alt="edit" className="edit" /></button>|
          <button onClick={handleDelete}><img src={del} alt="delete" className="edit" /></button>
        </div>
      );
    }
  };

  let profileImg;
  if (post?.user?.profile_image) {
    profileImg = post?.user?.profile_image;
  } else {
    if (post.user.account_type === "seller") {
      profileImg = seller;
    }
    if (post.user.account_type === "farmer") {
      profileImg = farmer;
    }
    if (post.user.account_type === "student") {
      profileImg = student;
    }
  }

  const handleNavigate = () => {
    const data = post;
    navigate("/post", { state: { data, opt: false } });
  };

  return (
    <>
      {showPopup && <UpdatePopup setShowPopup={setShowPopup} post={post} />}
      <div className="question" id={`live_feed_${post.id}`}>
        <div className="profile-info-post">
          <div>
            <img
              src={profileImg}
              alt={post?.user?.account_type}
              className="pro_image p-i"
            />
          </div>
          <div className="post-user-info">
            <p>{post.user?.username}</p>|
            <p>{post.user?.account_type}</p>
          </div>
        </div>
        {handleFunction()}
        <p className="q-body">{post?.body}</p>
        {post?.img && (
          <img
            src={post?.img}
            alt={post?.img}
            className="post-file"
          />
        )}

        <p className="time" style={{ top: '20px', left: '4.4rem' }}>{post?.created_at}</p>
        <br />
        <div className="like-ans">
          <div className="like-feature">
            <span className="likes-count">{likes.length} &nbsp;</span>
            <i
              className="fa fa-heart"
              style={{ color: like ? "red" : "white", cursor: "pointer" }}
              onClick={handleLike}
            ></i>
          </div>

          <p
            style={{ marginTop: "18px", cursor: "pointer" }}
            onClick={handleNavigate}
          >
            {ansCount} Answers
          </p>
        </div>
      </div>
    </>
  );
}

GetAllPost.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default GetAllPost;
