import React, { useEffect, useState } from "react";

import student from "../../../assets/icon/student.png";
import seller from "../../../assets/icon/seller.png";
import farmer from "../../../assets/icon/farmer.png";
import del from '../../../assets/icon/delete.png'


function AnsBody({ post, render, setRender }) {
  const [answers, setAnswers] = useState([]);


  const imgSelactor = (item) => {
    if (item == "student") {
      return student;
    }
    if (item == "farmer") {
      return farmer;
    }
    if (item == "seller") {
      return seller;
    }
  };

  useEffect(() => {
    const localAnswers = JSON.parse(localStorage.getItem("answers")) || [];
    const filteredAnswers = localAnswers.filter(
      (ans) => ans.post_id === post?.id
    );
    setAnswers(filteredAnswers);
    setRender(false);
  }, [render]);

  const handleDelete=(id)=>{
    const updatedAns = answers.filter((item)=>item.id != id)
    localStorage.setItem('answers',JSON.stringify(updatedAns))
    setRender(!render)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <>
    <div className="ans">
      {answers.map((ans) => (
        <div className="question" key={ans.id}>
          <div className="option">
            <button onClick={()=>handleDelete(ans.id)}>
              <img src={del} alt="delete" className="edit" />
            </button>
          </div>
          <div className="profile-info-post" style={{ color: "black" }}>
            <div>
              <img
                src={
                  ans.user.profile_image || imgSelactor(ans.user.account_type)
                }
                className="pro_image p-i"
                alt="Profile"
              />
            </div>
            <div className="post-user-info">
              <p>{ans.user.username}</p>|<p>{ans.user.account_type}</p>
            </div>
          </div>
          <p className="q-body ans-body">{ans.answer_body}</p>
          <p className="time" style={{ paddingTop: "5px", color: "black",top:'20px',left:'4.4rem' }}>
            {formatDate(ans.created_at)}
          </p>
        </div>
      ))}
    </div>
    </>
  );
}

export default AnsBody;
