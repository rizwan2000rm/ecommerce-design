import React from "react";
import { PlusCircle } from "phosphor-react";
import modelImg from "../../assets/model.png";
import bagImg from "../../assets/bag.png";
import shoesImg from "../../assets/shoes.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-image">
        <img src={modelImg} alt="model" />
      </div>
      <div className="hero-details">
        <div className="product center">
          <div className="heading">
            Tied Green
            <div>V-Neck Shirt</div>
          </div>
          <div className="floating-button">
            <PlusCircle size={64} weight="fill" />
          </div>
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
    </div>
  );
};

export default Hero;
