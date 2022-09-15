import React, { useEffect, useState } from "react";
import axios from "axios";

const playlist_endpoint = "https://api.spotify.com/v1/me/playlists";

const SpotifyGetPlaylists = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const handleGetPlaylist = () => {
    axios
      .get(playlist_endpoint, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button onClick={handleGetPlaylist}>Get Playlists</button>
      {data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}
    </>
  );
};

export default SpotifyGetPlaylists;
