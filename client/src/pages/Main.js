import React from 'react';
import Header from '../Components/Main/Header/Header';

const Main = () => {
  return (
    <>
      <Header />
      <div id="forSpecialist" style={{ height: 500 }}>Актуальні курси</div>
      <div id="aboutUs" style={{ height: 500 }}>Про нас</div>
      <div style={{ height: 500 }}>Контакти</div>
    </>
  )
}

export default Main;
