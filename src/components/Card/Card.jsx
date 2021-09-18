import React from "react";

const Card = ({ title, price, imageUrl }) => {
  return (
    <div>
      <div className="card">
        <div className="card-details">
          <div className="card-title">{title}</div>
          <div className="card-price">{price}</div>
        </div>
        <div className="card-image">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
