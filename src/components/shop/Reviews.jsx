import React from 'react';

function Reviews({ reviews }){
  return (
    <div className="comments-show ans-que">
      {reviews?.map((review) => (
        <div key={review?.id} className="review">
          <div className="com-user-info">
            <p style={{ paddingLeft: '15px' }}>{review?.user?.username}</p>
          </div>
          <h4 className="comment" style={{ paddingLeft: '15px' }}>{review?.comment}</h4>
          <p className="posted-on">{new Date(review?.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
