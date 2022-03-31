import React, { useState } from "react";
import {
  ModeButton,
  HeaderContainer,
  HeaderPreContainer,
  AllLinks,
} from "./Header.style";

const Header = () => {
  const [dark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(!dark);
  };
  return (
    <HeaderPreContainer>
      <HeaderContainer>
        <AllLinks to={"/"}>
          <h4 style={{ fontSize: "1.5rem", color: "#fff" }}>DevJobs</h4>
        </AllLinks>
        <ModeButton onClick={toggleDark}>
          Switch to {dark ? "light" : "dark"}
        </ModeButton>
      </HeaderContainer>
    </HeaderPreContainer>
  );
};

export default Header;
