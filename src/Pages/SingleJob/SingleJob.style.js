import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 30px 30%;
`;

export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 25px;
  border-radius: 15px;
  margin: 20px 0;
  color: rgba(12, 26, 42, 0.7);
`;

export const Info = styled.div`
  padding: 25px;
  margin: 10px 0;
  background-color: #fff;
  border-radius: 15px;
`;

export const SingleTextDiv = styled.div`
  display: flex;
  align-items: center;
  color: #263b54;
  font-size: 0.75rem;
  margin: 0px;
  div {
    margin: 0 7px;
  }
`;

export const Description = styled.div`
  h1 {
    font-size: 1.1rem;
    color: rgba(12, 26, 42, 0.9);
  }

  ul {
    list-style: circle;
  }

  li {
    font-size: 1rem;
    line-height: 20px;
    color: rgba(12, 26, 42, 0.7);
    margin: 5px 0;
  }
`;
