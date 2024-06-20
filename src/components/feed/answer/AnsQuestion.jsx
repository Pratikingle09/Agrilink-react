import React, { useState, useEffect } from "react";

function AnsQuestion({ post, setRender }) {
  const [answer, setAnswer] = useState({
    id: Date.now(),
    post_id: post?.id,
    answer_body: "",
    created_at: new Date(),
    user: JSON.parse(localStorage.getItem("profile")),
  });
  const [ansBody, setAnsBody] = useState("");

  useEffect(() => {
    setAnswer((prevAnswer) => ({
      ...prevAnswer,
      post_id: post?.id,
    }));
  }, [post]);

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    if (ansBody) {
      const newAnswer = {
        ...answer,
        answer_body: ansBody,
      };

      let existingAnswers = JSON.parse(localStorage.getItem("answers")) || [];

      if (!Array.isArray(existingAnswers)) {
        existingAnswers = [];
      }

      const updatedAnswers = [...existingAnswers, newAnswer];
      localStorage.setItem("answers", JSON.stringify(updatedAnswers));

      let notification = {
        id: Date.now(),
        actor_name: answer.user?.username,
        created_at: new Date(),
        message: "Has answered your post",
      };

      let localNotifications = JSON.parse(localStorage.getItem("notification")) || [];

      if (!Array.isArray(localNotifications)) {
        localNotifications = [];
      }

      const updatedNotifications = [...localNotifications, notification];
      localStorage.setItem("notification", JSON.stringify(updatedNotifications));

      setAnsBody("");
      setRender(true);
      alert("Answer submitted successfully!");
    } else {
      alert("Answer should not be empty");
    }
  };

  return (
    <>
      <form onSubmit={handleAnswerSubmit} className="ans-que">
        <textarea
          name="answer_body"
          onChange={(e) => setAnsBody(e.target.value)}
          placeholder="Answer the Question"
          className="question-body input"
          value={ansBody}
          required
        ></textarea>
        <input type="submit" value="Answer" className="answer-q" />
      </form>
    </>
  );
}

export default AnsQuestion;
