import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import styles from "./cssModules/Results.module.css";

function Results({ data }) {
  return (
    <div className={styles.container}>
      <SearchResults data={data} />
      <Playlist />
    </div>
  );
}

export default Results;
