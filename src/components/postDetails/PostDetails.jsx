import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import farmer from "../../assets/icon/farmer.png";
import seller from "../../assets/icon/seller.png";
import student from "../../assets/icon/student.png";

function PostDetails({ post }) {
  const [like, setLike] = useState(false);
  const [ansCount, setAnsCount] = useState('');
  const [likesCount, setLikesCount] = useState(post.likes || 0);

  const navigate = useNavigate();

  useEffect(() => {
    const localAnswers = JSON.parse(localStorage.getItem("answers")) || [];
    const filteredAnswers = localAnswers.filter(
      (ans) => ans.post_id === post?.id
    );
    setAnsCount(filteredAnswers.length);

    const localLikes = JSON.parse(localStorage.getItem("likes")) || {};
    if (localLikes[post?.id] !== undefined) {
      setLikesCount(localLikes[post?.id]);
    }
  }, [post?.id]);

  let profileImg;
  if (post?.user?.profile_image) {
    profileImg = post.user.profile_image;
  } else {
    if (post?.user?.account_type === "seller") {
      profileImg = seller;
    }
    if (post?.user?.account_type === "farmer") {
      profileImg = farmer;
    }
    if (post?.user?.account_type === "student") {
      profileImg = student;
    }
  }

  const handleLike = () => {
    const newLikeStatus = !like;
    setLike(newLikeStatus);

    let updatedLikes = likesCount;
    if (newLikeStatus) {
      updatedLikes += 1;
    } else {
      updatedLikes -= 1;
    }
    if (updatedLikes < 0) {
      updatedLikes = 0;
    }
    setLikesCount(updatedLikes);

    const localLikes = JSON.parse(localStorage.getItem("likes")) || {};
    localLikes[post?.id] = updatedLikes;
    localStorage.setItem("likes", JSON.stringify(localLikes));
  };

  return (
    <>
      <div className="question" id={`live_feed_${post?.id}`}>
        <div className="profile-info-post">
          <div>
            <img
              src={profileImg}
              alt={post?.user?.account_type}
              className="pro_image p-i"
            />
          </div>
          <div className="post-user-info">
            <p>{post?.user?.username}</p>|
            <p>{post?.user?.account_type}</p>
          </div>
        </div>
        <p className="q-body">{post?.body}</p>
        {post?.img && (
          <img
            src={post?.img}
            alt={post?.img}
            className="post-file"
          />
        )}

        <p className="time" style={{top:'20px',left:'4.4rem'}}>{post?.created_at}</p>
        <br />
        <div className="like-ans">
          <div className="like-feature">
            <span className="likes-count">{likesCount} &nbsp;</span>
            <i
              className="fa fa-heart"
              style={{ color: like || post?.likes>=0 ? "red" : "white", cursor: "pointer" }}
              onClick={handleLike}
            ></i>
          </div>

          <p
            style={{ marginTop: "18px", cursor: "pointer" }}
          >
            {ansCount} Answers
          </p>
        </div>
      </div>
    </>
  );
}

export default PostDetails;
