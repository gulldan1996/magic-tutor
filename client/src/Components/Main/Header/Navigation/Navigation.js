import React from "react";
import "./Navigation.scss";
import Register from "../Register/Register";

const Navigation = () => {
  return (
    <nav className="nav container">
      <ul className="nav-list">
        <li className="nav-item">Головна</li>
        <li className="nav-item">Для спеціалістів</li>
        <li className="nav-item">Для батьків</li>
        <li className="nav-item" ><a href="#aboutUs">Про нас</a></li>
        <li className="nav-item"><Register /></li>
        <li className="nav-item">Вхід</li>
      </ul>
    </nav>
  );
};

export default Navigation;
