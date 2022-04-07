import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width:700px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to top, #0066ff 0%, #ccff99 100%);
  box-shadow: inset 0 0 1em grey, 0 0 1em black;
  border-radius: 10px;
`;

export const WordOutput = styled.div`
  width: 100%;
  background: #323c58;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 26px;
  line-height: 1;
  border-radius: 10px 10px 0px 0px;
`;

export const WordValues = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;

export const Input = styled.input`
  width: 80%;
  // height: 100%;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 18px;
  border-radius: 0px 0px 0px 10px;

  &::placeholder {
    color: #fff;
  }
`;
