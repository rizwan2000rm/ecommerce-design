import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, User, CaretCircleRight } from "phosphor-react";
import modelImg from "../../assets/model-sidebar.jpg";
import "./RightSidebar.scss";

const RightSidebar = () => {
  return (
    <motion.div
      className="right-sidebar"
      key="right-sidebar"
      initial={{ opacity: 0, x: 400 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 400 }}
      transition={{ duration: 0.8 }}
    >
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
      <Link to="/product" className="close-btn">
        <CaretCircleRight size={64} weight="thin" />
      </Link>
    </motion.div>
  );
};

export default RightSidebar;
