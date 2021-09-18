import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import { motion } from "framer-motion";
import { List, HeartStraight } from "phosphor-react";
import logoUrl from "../../Logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      layoutId="transition-navbar"
      transition={{ duration: 0.8 }}
    >
      <div className="nav-left">
        <div className="sidebar-toggle center">
          <List size={24} />
        </div>
        <Link to="" className="logo center">
          <img src={logoUrl} alt="" />
        </Link>
        <Nav array={["New", "Sale", "Men", "Women"]} />
      </div>
      <div className="nav-right center">
        <div className="nav">
          <div className="nav-item center">
            <HeartStraight size={24} />
          </div>
          <div className="nav-item center">Search</div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
