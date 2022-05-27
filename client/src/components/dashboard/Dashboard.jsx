import { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import useAuth from "../../custom-hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import TrackSearchResult from "../tracksearchresult/TrackSearchResult";
import Player from "../player/Player";

const SpotifyApi = new SpotifyWebApi({
  clientId: "39b5920110694ad98a9ab8ee79ce1622",
});

const Dashboard = ({ code }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();
  const accessToken = useAuth(code);

  function chooseTrack(track) {
    setPlayingTrack(track);
    setSearch("");
  }

  // Run when the accessToken changes
  useEffect(() => {
    if (!accessToken) return;

    SpotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  // On search
  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    SpotifyApi.searchTracks(search).then((res) => {
      setSearchResults(
        res.body.tracks.items.map((track) => {
          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumCover: track.album.images[2].url,
          };
        })
      );
    });
  }, [search, accessToken]);

  return (
    <Container
      style={{ minHeight: "100vh", height: "100vh" }}
      className="d-flex flex-column py-2"
    >
      <Form.Control
        type="search"
        placeholder="Search SongS/Artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
        {searchResults.map((track) => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
      </div>

      <div>
        <Player accessToken={accessToken} />
      </div>
    </Container>
  );
};

export default Dashboard;
