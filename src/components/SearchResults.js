import styles from "./cssModules/SearchResults.module.css";
import Tracklist from "./Tracklist";

function SearchResults({ songs, playlist, changePlaylist }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Results</h2>
      <Tracklist
        songs={songs}
        playlist={playlist}
        changePlaylist={changePlaylist}
      />
    </div>
  );
}

export default SearchResults;
