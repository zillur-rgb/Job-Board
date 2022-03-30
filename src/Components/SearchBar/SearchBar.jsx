import React from "react";
import { InputForm, SearchContainer, SubmitBtn } from "./SearchBar.style";

const SearchBar = ({
  title,
  setTitle,
  company,
  setCompany,
  handleSearch,
  checkbox,
  setCheckbox,
}) => {
  return (
    <SearchContainer onSubmit={handleSearch}>
      <InputForm
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Filter by title"
      />
      <InputForm
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
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

      <SubmitBtn>Search</SubmitBtn>
    </SearchContainer>
  );
};

export default SearchBar;
