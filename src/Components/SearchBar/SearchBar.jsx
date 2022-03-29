import React from "react";
import { InputForm, SearchContainer, SubmitBtn } from "./SearchBar.style";

const SearchBar = () => {
  return (
    <SearchContainer>
      <InputForm type="text" />
      <InputForm type="text" />
      <input
        type="checkbox"
        id="check"
        name="check"
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
