import axios from "axios";
import React, { useEffect, useState } from "react";
import { Wrapper } from "./Homepage.style";
import Jobs from "../../Components/Jobs/Jobs";
import SearchBar from "../../Components/SearchBar/SearchBar";

const Homepage = () => {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [searchRes, setSearchRes] = useState([]);
  console.log(checkbox);

  useEffect(() => {
    axios.get("data.json").then((res) => {
      setJobs(res.data);
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const searchedByTitle = jobs.filter((job) =>
      job.title.toLowerCase().includes(title.toLowerCase())
    );

    console.log(searchedByTitle);

    let searchByCompany = searchedByTitle
      ? searchedByTitle.filter((job) =>
          job.country.toLowerCase().includes(company.toLowerCase())
        )
      : jobs.filter((job) =>
          job.country.toLowerCase().includes(company.toLowerCase())
        );

    console.log(searchByCompany);

    const searchByCheckbox =
      checkbox && searchByCompany
        ? searchedByTitle.filter((job) => job.jobtype === "Fulltime")
        : searchByCompany;
    console.log(searchByCheckbox);

    setTitle("");
    setCompany("");
    console.log(title);
    console.log(company);
  };

  return (
    <Wrapper>
      <SearchBar
        title={title}
        setTitle={setTitle}
        company={company}
        setCompany={setCompany}
        handleSearch={handleSearch}
        checkbox={checkbox}
        setCheckbox={setCheckbox}
      />
      <Jobs jobs={jobs} />
    </Wrapper>
  );
};

export default Homepage;
