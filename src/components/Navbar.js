import logo from "/Users/aramhekimian/repos/jamming/src/assets/logo.png";
import styles from "./cssModules/Navbar.module.css";

function Navbar() {
  return (
    <>
      <img src={logo} className={styles.logo} alt="Jamming logo" />
    </>
  );
}

export default Navbar;
