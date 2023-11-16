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
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Playlist</h2>
      <input
        type="text"
        value={playlist.name ?? ""}
        className={styles.input}
        onChange={changeName}
      />
      <Tracklist songs={playlist.songs} />
    </div>
  );
}

export default Playlist;
