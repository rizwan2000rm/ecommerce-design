import React from "react";
import { Link } from "react-router-dom";
import { PlusCircle } from "phosphor-react";
import modelImg from "../../assets/model.png";
import bagImg from "../../assets/bag.png";
import shoesImg from "../../assets/shoes.png";
import { motion, AnimatePresence } from "framer-motion";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-details">
        <div className="product center">
          <div className="heading">
            Tied Green
            <div>V-Neck Shirt</div>
          </div>
          <Link to="/product" className="floating-button">
            <PlusCircle size={64} weight="fill" />
          </Link>
        </div>
        <div className="extra-products">
          <div className="cards">
            <div className="card">
              <div className="card-details">
                <div className="card-title">Half Dome Poolover</div>
                <div className="card-price">$87</div>
              </div>
              <div className="card-image">
                <img src={bagImg} alt="" />
              </div>
            </div>
            <div className="card">
              <div className="card-details">
                <div className="card-title">Half Dome Poolover</div>
                <div className="card-price">$87</div>
              </div>
              <div className="card-image shoes">
                <img src={shoesImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div className="hero-image" layoutId="transition-image">
        <img src={modelImg} alt="model" />
      </motion.div>
    </div>
  );
};

export default Hero;
