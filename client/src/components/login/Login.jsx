import React from "react";
import "./login.css";
import { Container } from "react-bootstrap";

export const authEndpoint = " https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "39b5920110694ad98a9ab8ee79ce1622";

const scopes = [
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-library-read",
  "user-library-modify",
  "user-modify-playback-state",
  "user-read-playback-state",
];

const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=code&show_dialog=true`;

const Login = () => {
  return (
    <Container className="login">
      <img
        className="login__image"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />

      <a className="login__button" href={loginUrl}>
        LOGIN WITH SPOTIFY
      </a>
    </Container>
  );
};

export default Login;
