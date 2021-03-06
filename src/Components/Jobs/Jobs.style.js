import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  margin: 0 15%;
`;

export const AllLinks = styled(Link)`
  text-decoration: none;
`;
