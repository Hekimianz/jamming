import styles from "./cssModules/SearchResults.module.css";
import Tracklist from "./Tracklist";

function SearchResults({ data }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Results</h2>
      <Tracklist data={data} />
    </div>
  );
}

export default SearchResults;
