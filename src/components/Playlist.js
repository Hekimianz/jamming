import { useEffect, useState } from "react";
import styles from "./cssModules/Playlist.module.css";
import Tracklist from "./Tracklist";

function Playlist({
  playlist,
  changePlaylist,
  authUrl,
  token,
  createPlaylist,
}) {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, []);

  function changeName(e) {
    changePlaylist((prev) => {
      return {
        ...prev,
        name: e.target.value,
      };
    });
  }

  const checkPlaylistLength = () => {
    if (playlist.hasOwnProperty("songs")) {
      if (playlist.songs.length !== 0 && playlist.name !== "") {
        if (loggedIn) {
          return styles.save;
        } else {
          return styles.disabled;
        }
      } else {
        return styles.disabled;
      }
    }
  };

  const submitPlaylist = () => {
    createPlaylist();
    changePlaylist({
      name: "",
      songs: [],
      allUris: [],
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Playlist</h2>
      <input
        type="text"
        value={playlist.name ?? ""}
        className={styles.input}
        onChange={changeName}
        placeholder="Enter playlist name"
      />
      <Tracklist
        songs={playlist.songs}
        playlist={playlist}
        changePlaylist={changePlaylist}
      />
      <button
        className={checkPlaylistLength()}
        onClick={checkPlaylistLength() === styles.save ? submitPlaylist : null}
      >
        Save to Spotify
      </button>
      {loggedIn ? (
        <p className={styles.loggedIn}>Logged in!</p>
      ) : (
        <a href={authUrl} className={styles.notLogged}>
          Log in to Spotify
        </a>
      )}
    </div>
  );
}

export default Playlist;
