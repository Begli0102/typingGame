import React, { useContext } from "react";
import Button from "./Button";
import CountDown from "./CountDown";
import {
  Container,
  WordOutput,
  WordValues,
  Input
} from "../styled-components/typeracer";
import { WordContext } from "../context/wordContext";

const TypeRacer = () => {
  const { newWord, inputValue, setInputValue, disabled, handleInput } =
    useContext(WordContext);

  return (
    <Container>
      <WordOutput>{newWord}</WordOutput>
      <CountDown />
      <WordValues>
        <Input
          type="text"
          autoFocus
          value={inputValue}
          disabled={disabled && disabled}
          onChange={(e) => setInputValue(e.target.value)}
          // placeholder={disabled ? "" : "Start typing..."}
          onKeyPress={(e) => handleInput(e)}
        />
        <Button />
      </WordValues>
    </Container>
  );
};

export default TypeRacer;

