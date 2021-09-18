import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List, HeartStraight } from "phosphor-react";
import logoUrl from "../../Logo.svg";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = () => {
  const [activeId, setActiveId] = useState(3);

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
        <div className="nav">
          {["New", "Sale", "Man", "Women"].map((navItem, idx) => (
            <div
              className={`nav-item center ${idx === activeId && "active"}`}
              onClick={() => setActiveId(idx)}
            >
              {navItem}
            </div>
          ))}
          {/* <div className="nav-item center">Sale</div>
          <div className="nav-item center">Man</div>
          <div className="nav-item center active">Women</div> */}
        </div>
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
