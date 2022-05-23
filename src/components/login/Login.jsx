import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <img
        className="login__image"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />

      <a className="login__button">LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;
