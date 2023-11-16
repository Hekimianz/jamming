import { useEffect, useState } from "react";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import bgImg from "/Users/aramhekimian/repos/jamming/src/assets/background.jpg";
import { songs, playlist } from "./mockData";
import styles from "./components/cssModules/App.module.css";

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
  useEffect(() => {
    setSongsData(songs);
  }, []);

  const [playlistData, setPlaylistData] = useState({});
  useEffect(() => {
    setPlaylistData(playlist);
  }, []);

  return (
    <div style={containerStyles}>
      <Navbar />
      <SearchBar />
      <Results
        songs={songsData}
        playlist={playlistData}
        changePlaylist={setPlaylistData}
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
