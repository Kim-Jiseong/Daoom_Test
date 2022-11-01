import React, { useState, useEffect } from "react";
import * as S from "./style";
const TypingText = ({ text, speed, fontSize, color, weight, fontFamily }) => {
  TypingText.defaultProps = {
    fontSize: "2rem", //기본값
    color: "black", //기본값
  };
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);

  useEffect(() => {
    let typingText = text ? text : ""; //기본값
    let typingSpeed = speed ? speed : 100; //기본값
    const interval = setInterval(() => {
      setText((Text) => {
        let updated = Text;
        updated = Text + typingText[Count];
        return updated;
      });
      setCount(Count + 1);
    }, typingSpeed);
    Count === typingText.length && clearInterval(interval);
    return () => clearInterval(interval);
  });
  return (
    <S.Text
      style={{
        fontFamily: `${fontFamily}`,
        // fontSize: `${fontSize}`,
        color: `${color}`,
        fontWeight: `${weight}`,
      }}
    >
      {Text}&nbsp;
    </S.Text>
  );
};

export default TypingText;
