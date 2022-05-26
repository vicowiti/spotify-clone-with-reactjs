import React from "react";
import Login from "./components/login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const code = new URLSearchParams(window.location.search).get("code");

  return (
    <div style={{ backgroundColor: "black" }}>
      
      <Login />
    </div>
  );
};

export default App;
