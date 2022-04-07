import React, { useContext } from "react";
import {
  Container,
  Title,
  TitleCorrect,
  TitleWrong,
  ResultsContainer,
  Result,
  ResultRow
} from "../styled-components/result";

import { WordContext } from "../context/wordContext";

const Results = () => {
  const { correctCount, wrongCount, correctResults, wrongResults } =
    useContext(WordContext);
  return (
    <Container>
      <Title>
        <TitleCorrect>Correct Answers:{correctCount}</TitleCorrect>
        <TitleWrong>Wrong Answers:{wrongCount}</TitleWrong>
      </Title>
      <ResultsContainer>
        <Result>
          {correctResults.map((result, index) => (
            <ResultRow style={{ backgroundColor: "green" }} key={index}>
              {result}
            </ResultRow>
          ))}
        </Result>

        <Result>
          {wrongResults.map((result, index) => (
            <ResultRow key={index}>{result}</ResultRow>
          ))}
        </Result>
      </ResultsContainer>
    </Container>
  );
};

export default Results;

