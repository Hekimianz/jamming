import styles from "./cssModules/Tracklist.module.css";
import Track from "./Track";

function Tracklist(props) {
  if (props.songs) {
    const data = props.songs.map((song, i) => {
      return (
        <li className={styles.item} key={i}>
          <Track
            title={song.title}
            artist={song.artist}
            album={song.album}
            added={song.added}
            playlist={props.playlist}
            changePlaylist={props.changePlaylist}
            id={song.id}
            allSongs={props.songs}
          />
        </li>
      );
    });
    return <ul className={styles.list}>{data}</ul>;
  }
}

export default Tracklist;
