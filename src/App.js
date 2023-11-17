import { useEffect, useState } from "react";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import bgImg from "/Users/aramhekimian/repos/jamming/src/assets/background.jpg";
import styles from "./components/cssModules/App.module.css";
import axios from "axios";

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1) ), url(${bgImg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100vw",
};

function App() {
  const [songsData, setSongsData] = useState([]);

  const [playlistData, setPlaylistData] = useState({
    name: "",
    songs: [],
    allUris: [],
  });

  const [token, setToken] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

  // Spotify Token Auth
  const CLIENT_ID = "53102ed0e47c475696c89fcab61f61c9";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const url = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;

  // Search query fn
  const searchSong = async (e) => {
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: search,
        type: "track",
        limit: 50,
      },
    });

    const songsObj = data.tracks.items.map((song) => {
      return {
        title: song.name,
        artist: song.artists[0].name,
        album: song.album.name,
        id: song.id,
        added: false,
        uri: song.uri,
      };
    });
    console.log(songsObj);
    setSongsData(songsObj);
  };

  const createPlaylist = async (e) => {
    const { data } = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const id = data.id;
    await axios
      .post(
        `https://api.spotify.com/v1/users/${id}/playlists`,
        // '{\n    "name": "New Playlist",\n    "description": "Playlist created using Jamming.",\n    "public": false\n}',
        {
          name: playlistData.name,
          description: "Playlist created using Jamming.",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(async (response) => {
        const playlistId = response.data.id;
        await axios.post(
          `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
          {
            uris: playlistData.allUris,
            position: 0,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
      });
  };

  return (
    <div style={containerStyles}>
      <Navbar />
      <SearchBar setSearch={setSearch} searchSong={searchSong} />
      <Results
        songs={songsData}
        playlist={playlistData}
        changePlaylist={setPlaylistData}
        authUrl={url}
        token={token}
        createPlaylist={createPlaylist}
      />
      <footer style={{ color: "white", marginBottom: "15px" }}>
        Made with ♥️ by{" "}
        <a
          className={styles.link}
          href="https://github.com/Hekimianz"
          target="_blank"
          rel="noreferrer"
        >
          Aram Hekimian
        </a>
      </footer>
    </div>
  );
}

export default App;
