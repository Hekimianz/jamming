import styles from "./cssModules/Tracklist.module.css";
import Track from "./Track";

function Tracklist({ data }) {
  const songs = data.map((song) => {
    return (
      <li className={styles.item} key={song.id}>
        <Track title={song.title} artist={song.artist} album={song.album} />
      </li>
    );
  });
  return <ul className={styles.list}>{songs}</ul>;
}

export default Tracklist;
