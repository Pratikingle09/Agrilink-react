import React from 'react';

function StarRating({ averageRating }){
  const getStarClass = (index) => {
    if (averageRating >= index + 1) {
      return 'fa fa-star rate checked';
    } else if (averageRating > index && averageRating < index + 1) {
      return 'fa fa-star rate half-checked';
    } else {
      return 'fa fa-star rate';
    }
  };

  return (
    <div className="rating-star">
      {[...Array(5)].map((item,index) => (
        <span key={index} className={getStarClass(index)}></span>
      ))}
    </div>
  );
};

export default StarRating;
