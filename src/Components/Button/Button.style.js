import styled from "styled-components";

export const Button = styled.button`
  padding: 12px 30px;
  margin: 0 20px;
  cursor: pointer;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;

  :hover {
    opacity: 0.9;
  }
`;
