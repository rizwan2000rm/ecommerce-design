import React from "react";
import { List, HeartStraight } from "phosphor-react";
import logoUrl from "../../Logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="sidebar-toggle center">
          <List size={24} />
        </div>
        <div className="logo center">
          <img src={logoUrl} alt="" />
        </div>
        <div className="nav">
          <div className="nav-item center">New</div>
          <div className="nav-item center">Sale</div>
          <div className="nav-item center">Man</div>
          <div className="nav-item center active">Women</div>
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
    </nav>
  );
};

export default Navbar;
