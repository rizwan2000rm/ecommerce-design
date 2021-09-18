import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { PlusCircle } from "phosphor-react";
import modelImg from "../../assets/model.png";
import bagImg from "../../assets/bag.png";
import shoesImg from "../../assets/shoes.png";
import { motion } from "framer-motion";
import "./Hero.scss";

const Hero = () => {
  // variants
  const container = {
    show: {
      transition: {
        staggerChildren: 0.45
      }
    }
  };

  const item = {
    hidden: {
      y: -100,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, 0.5, 0.95],
        duration: 0.6
      }
    },
    exit: {
      y: 100,
      opacity: 0
    }
  };

  return (
    <div className="hero">
      <motion.div
        className="hero-details"
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="product center">
          <motion.div className="heading" variants={item}>
            Tied Green
            <div>V-Neck Shirt</div>
          </motion.div>
          <Link to="/product" className="floating-button">
            <PlusCircle size={64} weight="fill" />
          </Link>
        </div>
        <div className="extra-products">
          <motion.div className="cards" variants={item}>
            <Card title="Half Dome Poolover" price="$87" imageUrl={bagImg} />
            <Card title="Half Dome Poolover" price="$87" imageUrl={shoesImg} />
          </motion.div>
        </div>
      </motion.div>
      <motion.div className="hero-image" layoutId="transition-image">
        <img src={modelImg} alt="model" />
      </motion.div>
    </div>
  );
};

export default Hero;
