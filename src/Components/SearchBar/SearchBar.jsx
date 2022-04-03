import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../Button/Button";
import { InputForm, SearchContainer } from "./SearchBar.style";

const SearchBar = () => {
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  // const [searchRes, setSearchRes] = useState([]);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setTitle("");
    navigate(`/${title}`);
  };

  return (
    <SearchContainer onSubmit={submitHandler}>
      <InputForm
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Filter by title"
      />
      <InputForm
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
        }}
        type="text"
        placeholder="Filter by company name"
      />
      <input
        type="checkbox"
        id="check"
        name="check"
        value={checkbox}
        onClick={() => {
          setCheckbox(!checkbox);
        }}
        style={{
          margin: "0 10px 0 40px",
          border: "none",
          backgroundColor: "#eee",
        }}
      />
      <label
        htmlFor="check"
        style={{ whiteSpace: "nowrap", marginRight: "30px" }}
      >
        Fulltime Only
      </label>

      <ButtonComponent bg="#0c1a2a" color="#eee" text="Search" />
    </SearchContainer>
  );
};

export default SearchBar;
