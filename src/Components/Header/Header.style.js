import styled from "styled-components";
import { Link } from "react-router-dom";
export const HeaderPreContainer = styled.div`
  height: 120px;
  background-image: url("Background.jpg");
  border-radius: 0 0 0 70px;
`;

export const HeaderContainer = styled.div`
  max-width: 100vw;
  margin: 0px 10% 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModeButton = styled.button`
  padding: 10px 20px;
  background-color: #eee;
  border: none;
  cursor: pointer;
`;

export const AllLinks = styled(Link)`
  text-decoration: none;
`;
