//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = " https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "39b5920110694ad98a9ab8ee79ce1622";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const findTokenFromURL = () => {
  return window.location.hash;
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
