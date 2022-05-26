const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  const code = req.body.code;

  const SpotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000/",
    clientId: "39b5920110694ad98a9ab8ee79ce1622",
    clientSecret: "f429eee56ca64855a778e5e046db5962",
  });

  SpotifyApi.authorizationCodeGrant(code)
    .then((data) => {
      const credentials = {
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      };

      res.status(200).json(credentials);
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
    });
});

//refresh token route

app.post("/refresh", (req, res) => {
  refreshToken = req.body.refreshToken;

  const SpotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000/",
    clientId: "39b5920110694ad98a9ab8ee79ce1622",
    clientSecret: "f429eee56ca64855a778e5e046db5962",
    refreshToken,
  });

  SpotifyApi.refreshAccessToken()
    .then((data) => {
      res.status(200).json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch(() => {
      res.status(400);
    });
});

app.listen(5000, () => {
  console.log("App running");
});
