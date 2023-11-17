import { useEffect, useState } from "react";
import styles from "./cssModules/SearchBar.module.css";

function SearchBar(props) {
  const [input, setInput] = useState("");
  useEffect(() => {
    props.setSearch(input);
  }, [input, props]);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchSong();
    setInput("");
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Search song"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </>
  );
}

export default SearchBar;
