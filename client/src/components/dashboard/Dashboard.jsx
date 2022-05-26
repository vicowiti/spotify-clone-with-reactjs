import React from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../custom-hooks/useAuth";

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);

  return <Container>{code}</Container>;
};

export default Dashboard;
