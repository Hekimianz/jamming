import { useEffect, useState } from "react";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import bgImg from "/Users/aramhekimian/repos/jamming/src/assets/background.jpg";
import songs from "./mockData";

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1) ), url(${bgImg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100vw",
};

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(songs);
  }, []);

  return (
    <div style={containerStyles}>
      <Navbar />
      <SearchBar />
      <Results data={data} />
    </div>
  );
}

export default App;
