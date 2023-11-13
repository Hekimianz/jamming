import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Track from "./components/Track";
import Tracklist from "./components/Tracklist";
import Navbar from "./components/Navbar";
import bgImg from "/Users/aramhekimian/repos/jamming/src/assets/background.jpg";

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100vw",
};

function App() {
  return (
    <div style={containerStyles}>
      <Navbar />
      <SearchBar />
    </div>
  );
}

export default App;
