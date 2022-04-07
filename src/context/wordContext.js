import React, { createContext, useState, useEffect } from "react";
import Words from "../component/Words";

export const WordContext = createContext();

const WordProvider = ({ children }) => {
  const [word] = useState(Words);
  const [newWord, setNewWord] = useState(Words[0]);
  const [inputValue, setInputValue] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [correctResults, setCorrectResults] = useState([]);
  const [wrongResults, setWrongResults] = useState([]);
  const [time, setTime] = useState(30);
  const [disabled, setDisabled] = useState(true);

  const randomWord = Math.round(Math.random() * word.length);

  const checkAnswer = () => {
    if (inputValue.trim() === newWord) {
      setCorrectCount((prev) => prev + 1);
      setCorrectResults((prev) => [...prev, newWord]);
      return;
    } else {
      setWrongCount((prev) => prev + 1);
      setWrongResults((prev) => [...prev, inputValue]);
      return;
    }
  };

  const handleInput = (e) => {
    if (e.charCode === 13 && inputValue.trim() !== "") {
      checkAnswer();
      setNewWord(word[randomWord]);
      setInputValue("");
    }
  };

  const handleStart = () => {
    checkAnswer();
    setCorrectCount(0);
    setWrongCount(0);
    setCorrectResults([]);
    setWrongResults([]);
    setInputValue("");
    setDisabled(!disabled);
  };

  useEffect(() => {
    setNewWord(word[randomWord]);
  }, []);

  useEffect(() => {
    if (time <= 30 && disabled === false && time !== 0) {
      setTimeout(() => setTime(time - 1), 1000);
    } else if (disabled) {
      setTime(30);
    } else if (time === 0) {
      setDisabled(disabled);
      setInputValue("Time is over");
    }
  }, [time, disabled]);

  return (
    <WordContext.Provider
      value={{
        newWord,
        inputValue,
        setInputValue,
        handleInput,
        handleStart,
        disabled,
        time,
        setTime,
        correctResults,
        wrongResults,
        correctCount,
        wrongCount
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export default WordProvider;

