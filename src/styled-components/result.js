import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 540px;
  height: 600px;
  background: linear-gradient(to top, #0066ff 0%, #ccff99 100%);
  display: flex;
  flex-direction: column;
  box-shadow: inset 0 0 1em grey, 0 0 1em black;
  border-radius: 10px;
`;

export const Title = styled.h2`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px 10px 0px 0px;
`;

export const TitleCorrect = styled.p`
  font-size: 26px;
  line-height: 1;
  color: green;
`;

export const TitleWrong = styled.p`
  font-size: 26px;
  line-height: 1;
  color: red;
`;

export const ResultsContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80vh;
  max-height: 80vh;
  overflow: auto;
  margin: auto;
`;

export const Result = styled.div`
  width: 100%;
  max-width: 50%;
  padding: 10px;

  @media (max-width: 1210px) {
    max-width: 700px;
    margin: 40px 0;
  }
`;

export const ResultRow = styled.div`
  width: 100%;
  padding: 10px;
  background: #f73859;
  color: #fff;
  border-radius: 4px;
  word-wrap: break-word;
  margin-bottom: 10px;
`;
