import React from "react";

import "./Navbar.css";

const Navbar = ({ room }) => {
  return (
    <div className="navbar">
      <div className="leftInnerContainer">
        <h4 className="onlineIcon">💫</h4>
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a className="closeIcon" href="/">
          ❌
        </a>
      </div>
    </div>
  );
};

export default Navbar;
