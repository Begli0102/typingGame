import React, { useContext } from "react";
import { WordContext } from "../context/wordContext";
import { Btn } from "../styled-components/button";

const Button = () => {
  const { handleStart, disabled } = useContext(WordContext);

  return <Btn onClick={handleStart}>{disabled ? "Start" : "Restart"}</Btn>;
};

export default Button;
