import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import modelImg from "../../assets/model.png";
import { motion, AnimatePresence } from "framer-motion";
import "./Product.scss";

const Product = () => {
  return (
    <div>
      <Navbar />
      <div className="product">
        <AnimatePresence>
          <motion.div
            className="product-image"
            layoutId="transition-image"
            transition={{ duration: 0.8 }}
          >
            <img src={modelImg} alt="model" />
          </motion.div>
        </AnimatePresence>
        <div className="product-details">
          <Link to="/" className="product-title">
            Tied Green
            <div>V-Neck Shirt</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
