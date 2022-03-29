import styled from "styled-components";

export const SearchContainer = styled.form`
  max-width: 100%;
  background: #fff;
  margin: 20px 15%;
  padding: 10px 0;
  box-shadow: 0px 10px 40px 0 rgba(0, 0, 0, 0.01);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputForm = styled.input`
  padding: 20px 20px;
  width: 40%;
  border-right: 1px solid #ccc;
  border-bottom: none;
  border-top: none;
  border-left: none;
  outline: #0c1a2a;
  font-size: 1rem;
`;

export const SubmitBtn = styled.button`
  padding: 20px 50px;
  margin: 0 20px;
  cursor: pointer;
  background-color: #0c1a2a;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 5px;
`;
