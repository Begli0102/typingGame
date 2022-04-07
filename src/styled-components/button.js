import styled from "styled-components";

export const Btn = styled.button`
  border: none;
  outline: none;
  background: crimson;
  color: #fff;
  font-size: 20px;
border-radius:0px 0px 10px;
  width: 20%;
  letter-spacing: 0.2rem;
  height: 100%;
  cursor: pointer;

  @media (max-width: 580px) {
    button {
      font-size: 16px;
    }
  }
`;
