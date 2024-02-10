import React from "react";
import "../styles/core.css";

const Auth: React.FC = () => {
  return (
    <div className="header__auth">
      <button className="header__auth-login">Log in</button>
      <button className="header__auth-reg">Registration</button>
    </div>
  );
};
export default Auth;
