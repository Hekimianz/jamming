import styles from "./cssModules/SearchBar.module.css";

function SearchBar() {
  return (
    <>
      <form className={styles.form}>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Search song"
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </>
  );
}

export default SearchBar;