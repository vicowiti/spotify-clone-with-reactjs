import { useEffect, useState } from "react";
import axios from "axios";

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:5000/login", { code })
      .then(function (response) {
        setAccessToken(response.data.accessToken);
        setExpiresIn(response.data.expiresIn);
        setRefreshToken(response.data.refreshToken);

        window.history.pushState({}, null, "/");
      })
      .catch(() => {
        window.location = "/";
      });
  }, [code]);

  //Refresh token logic

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;

    const timeOut = setTimeout(() => {
      axios
        .post("http://localhost:5000/refresh", { refreshToken })
        .then(function (response) {
          setAccessToken(response.data.accessToken);
          setExpiresIn(response.data.expiresIn);

          window.history.pushState({}, null, "/");
        })
        .catch(() => {
          window.location = "/";
        });
    }, (expiresIn - 60) * 1000);

    return () => clearTimeout(timeOut);
  }, [refreshToken, expiresIn]);

  return accessToken;
}
