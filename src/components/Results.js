import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import styles from "./cssModules/Results.module.css";

function Results({ songs, playlist, changePlaylist }) {
  return (
    <div className={styles.container}>
      <SearchResults songs={songs} />
      <Playlist playlist={playlist} changePlaylist={changePlaylist} />
    </div>
  );
}

export default Results;
