import React from "react";
import "./Header.scss";
import { connect } from "react-redux";
import Typist from "react-typist";
import Navigation from "./Navigation/Navigation";
import { getRegisterBool } from "../../../redux/selectors";
import Register from './Register/Register';

const Header = ({ getRegisterBool }) => {
  return (
    <header className="header-main">
      <div className="large-header">
        <Navigation />
        <h1 className="main-title">
          <Typist avgTypingDelay={260} startDelay={2000}>
            Magic Tutor
          </Typist>
        </h1>
      </div>
      {getRegisterBool && <Register />}
    </header>
  );
};


const mapStateToProps = state => ({
  getRegisterBool: getRegisterBool(state)
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
