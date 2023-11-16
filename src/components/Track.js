import styles from "./cssModules/Track.module.css";

function Track(props) {
  let button = "";
  if (props.added === true) {
    button = "-";
  } else {
    button = "+";
  }

  const addSongToPlaylist = (e) => {
    const id = e.target.id;
    const chosenSong = props.allSongs.filter((song) => song.id === id);
    chosenSong[0].added = true;
    props.changePlaylist((prev) => {
      return {
        name: prev.name,
        songs: [...prev.songs, chosenSong[0]],
      };
    });
  };

  const delSongFromPlaylist = (e) => {
    const id = e.target.id;
    const chosenSong = props.playlist.songs.filter((song) => song.id === id);
    chosenSong[0].added = false;

    props.changePlaylist((prev) => {
      return {
        name: prev.name,
        songs: [...prev.songs.filter((song) => song.id !== id)],
      };
    });
  };
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.name}>{props.title}</h2>
        <h3 className={styles.artist}>
          {props.artist} | {props.album}
        </h3>
      </div>
      <div>
        <p
          className={styles.add}
          onClick={button === "+" ? addSongToPlaylist : delSongFromPlaylist}
          id={props.id}
        >
          {button}
        </p>
      </div>
    </div>
  );
}

export default Track;
