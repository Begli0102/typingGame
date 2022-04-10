import styled, { keyframes } from "styled-components";

export const animation = keyframes` 
  // 0% {
  //    transform: scale(1);
  // }
  // 50% {
  //    color:red;transform: scale(1.2);
  // }
  // 100% {
  //     transform: scale(1);
  // }

    0% {
      opacity: 1;
    }
    25% {
      opacity: 0;color:crimson;
   }
    50% {
      opacity: 1;color:crimson;
    }
    100% {
      opacity: 0;color:crimson
    }

 
  `;

export const Time = styled.div`
  width: 240px;
  height: 140px;
  border-radius: 10px;
  // border: 2px solid #f73859;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 1em grey, 0 0 1em black;
`;

export const Counting = styled.p`
  margin: auto;
  font-size: 40px;
  line-height: 1;
  animation: ${animation} 1s infinite;
  animation-fill-mode: backwards;
  animation-delay: 23s;
  animation-iteration-count: 10;
`;
