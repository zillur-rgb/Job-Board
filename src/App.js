import axios from "axios";
import { useEffect, useState } from "react";
import { Wrapper } from "./App.style";
import Header from "./Components/Header/Header";
import Jobs from "./Components/Jobs/Jobs";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("data.json").then((res) => {
      setJobs(res.data);
    });
  }, []);
  return (
    <Wrapper>
      <Header />
      <SearchBar />
      <Jobs jobs={jobs} />
    </Wrapper>
  );
}

export default App;
