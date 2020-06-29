import React, { useState } from 'react';
import './Register.scss';

const Register = () => {
  const [bool, setBool] = useState(false);
  const openCLoseRegister = (bool) => {
    setBool(!bool);
  };

  return (
    <div onClick={() => openCLoseRegister(bool)}>
      Реєстрація
    </div>
  )
}

export default Register;
