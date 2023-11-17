import styles from "./cssModules/Playlist.module.css";
import Tracklist from "./Tracklist";

function Playlist({ playlist, changePlaylist }) {
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
        return styles.save;
      } else {
        return styles.disabled;
      }
    } else {
      return styles.disabled;
    }
  };

  console.log(playlist);

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
      <button className={checkPlaylistLength()}>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
