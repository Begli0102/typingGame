import React from "react";
import "./App.css";
import TypeRacer from "./component/TypeRacer";
import Results from "./component/Results";
import styled from "styled-components";

const Application = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1210px) {
    flex-direction: column;
    align-items: center;
    padding: 0 14px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin:30px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1210px) {
    max-width: 700px;
  }
`;

const App = () => {
  return (
    <Application>
      <Container>
        <TypeRacer />
      </Container>
      <Results />
    </Application>
  );
};

export default App;
