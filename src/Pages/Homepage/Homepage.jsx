import axios from "axios";
import React, { useEffect, useState } from "react";
import { Wrapper } from "./Homepage.style";
import Jobs from "../../Components/Jobs/Jobs";
import SearchBar from "../../Components/SearchBar/SearchBar";

const Homepage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("data.json").then((res) => {
      setJobs(res.data);
    });
  }, []);
  return (
    <Wrapper>
      <SearchBar />
      <Jobs jobs={jobs} />
    </Wrapper>
  );
};

export default Homepage;
