import styles from "./cssModules/Tracklist.module.css";
import Track from "./Track";

function Tracklist(props) {
  if (props.songs) {
    const data = props.songs.map((song) => {
      return (
        <li className={styles.item} key={song.id}>
          <Track
            title={song.title}
            artist={song.artist}
            album={song.album}
            added={song.added}
          />
        </li>
      );
    });
    return <ul className={styles.list}>{data}</ul>;
  }
}

export default Tracklist;
