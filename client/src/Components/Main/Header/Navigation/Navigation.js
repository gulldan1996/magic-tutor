import React from "react";
import { connect } from "react-redux";
import "./Navigation.scss";
import { handlerRegisterOpenCLose } from "../../../../redux/actions";

const Navigation = ({ openClose }) => {
  return (
    <nav className="nav container">
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Головна</a></li>
        <li className="nav-item"><a href="#forSpecialist">Для спеціалістів</a></li>
        <li className="nav-item"><a href="forParents">Для батьків</a></li>
        <li className="nav-item" ><a href="#aboutUs">Про нас</a></li>
        <li className="nav-item" onClick={() => openClose()}>Реєстрація</li>
        <li className="nav-item">Вхід</li>
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  openClose: () => dispatch(handlerRegisterOpenCLose())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
