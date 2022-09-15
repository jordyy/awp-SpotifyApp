import React, { useEffect } from "react";
import SpotifyGetPlaylists from "./Components/SpotifyGetPlaylist";
import "./WebApp.css";

const generateRandomString = (length) => {
  let result = "";
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charsLength = chars.length;
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charsLength));
  }
  return result;
};

const redirect_uri = "http://localhost:3000/webapp";
const state = generateRandomString(16);

const getReturnParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
    const [key, value] = currentValue.split("=");
    accumulator[key] = value;
    return accumulator;
  }, {});
  return paramsSplitUp;
};

const scopes = ["user-read-currently-playing", "user-read-playback-state"];
const space_delimiter = "%20";
const scopes_url_param = scopes.join(space_delimiter);

var url = "https://accounts.spotify.com/authorize";
url += "?response_type=token";
url += "&client_id=" + encodeURIComponent("ad59c6f39a8f4bc7a7d125c0ba1b6c9d");
url += "&scope=" + encodeURIComponent(scopes_url_param);
url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
url += "&state=" + encodeURIComponent(state);

const handleLogin = () => {
  window.location = url;
};

const WebApp = () => {
  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
        getReturnParamsFromSpotifyAuth(window.location.hash);

      localStorage.clear();
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("expiresIn", expires_in);
      localStorage.setItem("tokenType", token_type);
    }
  });
  return (
    <div className="container">
      <h1>just some words.</h1>
      <button onClick={handleLogin}>login to spotify</button>
      <SpotifyGetPlaylists />
    </div>
  );
};

export default WebApp;
