import React from "react";

const Header = () => {
  return (
    <header className="container">
      <div className="page-header">
        <div className="logo">
          <a href="#">Rahul.</a>
        </div>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="mainicon">
          <div className="menu">
            <i className="fa-solid fa-bars"></i>
          </div>
        </label>
        <ul>
          <li><a href="#" className="active" style={{ "--navAni": 1 }}>Home</a></li>
          <li><a href="#" style={{ "--navAni": 2 }}>About</a></li>
          <li><a href="#" style={{ "--navAni": 3 }}>Skills</a></li>
          <li><a href="#" style={{ "--navAni": 4 }}>Portfolio</a></li>
          <li><a href="#" style={{ "--navAni": 5 }}>Contact</a></li>
        </ul>
        <label className="mode">
          <input type="checkbox" id="darkModeToggle" />
          <i className="fa-solid fa-moon"></i>
        </label>
      </div>
    </header>
  );
};

export default Header;
