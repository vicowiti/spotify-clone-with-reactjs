import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";
const Player = ({ accessToken }) => {
  return <SpotifyPlayer token={accessToken} uris={[]} />;
};

export default Player;
