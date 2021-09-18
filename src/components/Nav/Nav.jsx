import React, { useState } from "react";
import "./Nav.scss";

const Nav = ({ array }) => {
  const [activeId, setActiveId] = useState(3);

  return (
    <div className="nav">
      {array.map((navItem, idx) => (
        <div
          className={`nav-item center ${idx === activeId && "active"}`}
          onClick={() => setActiveId(idx)}
          key={idx}
        >
          {navItem}
        </div>
      ))}
    </div>
  );
};

export default Nav;
