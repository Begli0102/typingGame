import React, { useContext } from "react";
 import { Time, Counting } from "../styled-components/countDown";
import { WordContext } from "../context/wordContext";


const CountDown = () => {
  const { time, animated } = useContext(WordContext);
  return (
    <Time>
      <Counting >
        00:00:{time}
      </Counting>
    </Time>
  );
};

export default CountDown;
