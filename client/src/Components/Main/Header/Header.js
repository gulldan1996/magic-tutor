import React from "react";
import "./Header.scss";
import Typist from "react-typist";
import Navigation from "./Navigation/Navigation";

const Header = () => {
  return (
    <header className="header-main">
      <div className="demo">
        <div id="large-header" className="large-header">
          <Navigation />
          <h1 className="main-title">
            <Typist avgTypingDelay={260} startDelay={2000}>
              Magic Tutor
            </Typist>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
