import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import styles from "./cssModules/Results.module.css";

function Results({
  songs,
  playlist,
  changePlaylist,
  authUrl,
  token,
  createPlaylist,
}) {
  return (
    <div className={styles.container}>
      <SearchResults
        songs={songs}
        playlist={playlist}
        changePlaylist={changePlaylist}
      />
      <Playlist
        playlist={playlist}
        changePlaylist={changePlaylist}
        authUrl={authUrl}
        token={token}
        createPlaylist={createPlaylist}
      />
    </div>
  );
}

export default Results;
