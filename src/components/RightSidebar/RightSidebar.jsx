import React from "react";
import { ShoppingBag, User, CaretCircleRight } from "phosphor-react";
import modelImg from "../../assets/model-sidebar.jpg";
import "./RightSidebar.scss";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="secondary-nav">
        <div className="nav center">
          <div className="nav-item center">
            <ShoppingBag size={24} />
          </div>
          <div className="nav-item center">
            <User size={24} />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content-text">SUMMER 2020</div>
        <div className="content-item">
          <img src={modelImg} alt="model" />
        </div>
      </div>
      <CaretCircleRight className="close-btn" size={64} weight="thin" />
    </div>
  );
};

export default RightSidebar;
