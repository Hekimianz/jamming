import styles from "./cssModules/Track.module.css";

function Track(props) {
  let button = "";
  if (props.added === true) {
    button = "-";
  } else {
    button = "+";
  }
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.name}>{props.title}</h2>
        <h3 className={styles.artist}>
          {props.artist} | {props.album}
        </h3>
      </div>
      <div>
        <p className={styles.add}>{button}</p>
      </div>
    </div>
  );
}

export default Track;
