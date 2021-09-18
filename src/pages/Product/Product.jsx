import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import model from "../../assets/model.png";
import model1 from "../../assets/model-01.png";
import model2 from "../../assets/model-02.png";
import { motion } from "framer-motion";
import "./Product.scss";

const Product = () => {
  const [heroProductUrl, setHeroProductUrl] = useState(model);

  // variants
  const container = {
    show: {
      transition: {
        staggerChildren: 0.2
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
    <div>
      <Navbar />
      <div className="product">
        <motion.div
          className="product-details"
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <div className="product-details-wrapper">
            <motion.div className="product-title" variants={item}>
              Tied Green
              <div>V-Neck Shirt</div>
            </motion.div>
            <motion.div className="product-price" variants={item}>
              $67
            </motion.div>
            <motion.div className="product-description" variants={item}>
              V-neck shirt with lapel colar. Long sleeve with cuffs. Front tie
              at hem. Front button closure.
            </motion.div>
            <motion.div className="product-sizes" variants={item}>
              <div className="title">Select Size</div>
              <div className="sizes">
                <div className="size-btn center">S</div>
                <div className="size-btn center">M</div>
                <div className="size-btn center">L</div>
              </div>
            </motion.div>
            <motion.div className="product-gallery" variants={item}>
              <motion.div
                className="product-gallery-item"
                onMouseOver={() => setHeroProductUrl(model)}
              >
                <img src={model} alt="" />
              </motion.div>
              <motion.div
                className="product-gallery-item"
                onMouseOver={() => setHeroProductUrl(model1)}
              >
                <img src={model1} alt="" />
              </motion.div>
              <motion.div
                className="product-gallery-item"
                onMouseOver={() => setHeroProductUrl(model2)}
              >
                <img src={model2} alt="" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="product-image"
          layoutId="transition-image"
          transition={{ duration: 0.8 }}
        >
          <img src={heroProductUrl} alt="model" />
        </motion.div>
      </div>
    </div>
  );
};

export default Product;
