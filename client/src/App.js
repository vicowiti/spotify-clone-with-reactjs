import React from "react";
import Login from "./components/login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  const code = new URLSearchParams(window.location.search).get("code");

  return (
    <div style={{ backgroundColor: "black" }}>
      {code ? <Dashboard code={code} /> : <Login />}
    </div>
  );
};

export default App;
