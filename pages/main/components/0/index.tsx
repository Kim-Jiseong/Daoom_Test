import React, { useEffect, useState, useCallback } from "react";
import * as S from "./style";
// import Background from "assets/png/DESIGN.png";
import quizData from "../quizData";
import { useRecoilState } from "recoil";
import pageIdxAtom from "atoms/pageIdxAtom";
const Quiz = () => {
  const [quizNumber, setQuizNumber] = useState(
    // localStorage.getItem("quizNumber")
    0
  );
  const [prevNumber, setPrevNumber] = useState([]);
  const [pageIdx, setPageIdx] = useRecoilState(pageIdxAtom);
  const [cycle, setCycle] = useState(false);
  const [input, setInput] = useState();
  // localStorage.getItem("input")
  const [loading, setLoading] = useState(false);
  const autoResizeTextarea = () => {
    let textarea = document.querySelector(".autoTextarea");
    localStorage.setItem("input", input);
    if (textarea) {
      textarea.style.height = "auto";
      let height = textarea.scrollHeight; // 높이
      textarea.style.height = `${height + 8}px`;
    }
  };
  const RandomQuiz = () => {
    const randomNumber = Math.floor(Math.random() * quizData.length);
    if (
      quizData.length > prevNumber.length &&
      prevNumber.includes(randomNumber)
    ) {
      RandomQuiz();
    } else if (
      quizData.length > prevNumber.length &&
      !prevNumber.includes(randomNumber)
    ) {
      console.log(randomNumber);
      setQuizNumber(randomNumber);
      localStorage.setItem("quizNumber", randomNumber);
      setPrevNumber([...prevNumber, randomNumber]);
    } else if (quizData.length === prevNumber.length) {
      setPrevNumber([]);
      console.log("oneCycle");
      setCycle(!cycle);
    }
  };
  const valueCtl = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
  };
  // useEffect(() => {
  //   if (localStorage.getItem("quizNumber") === null) {
  //     console.log("quiz");
  //     RandomQuiz();
  //   } else {
  //     setQuizNumber(localStorage.getItem("quizNumber"));
  //   }
  // }, [cycle]);
  // useEffect(() => {}, [pageIdx]);
  return (
    <S.Container pageIdx={pageIdx}>
      {/* {localStorage.getItem("quizNumber") !== null && ( */}
      <>
        {pageIdx === 0 && (
          <S.ReloadBtn onClick={RandomQuiz}>
            다른 질문 <i className="bi bi-arrow-repeat"></i>
          </S.ReloadBtn>
        )}
        <S.Icon className={quizData[quizNumber].icon}></S.Icon>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <S.Quote className="bi bi-quote"></S.Quote>
          <S.Title style={{ marginRight: "1rem", marginLeft: "1rem" }}>
            {quizData[quizNumber].quiz}
          </S.Title>
          <S.RQuote className="bi bi-quote"></S.RQuote>
        </div>
        {pageIdx === 0 && (
          <S.Input
            type="text"
            className="autoTextarea"
            value={input}
            pageIdx={pageIdx}
            onChange={valueCtl}
            onKeyDown={autoResizeTextarea}
            onKeyUp={autoResizeTextarea}
            spellcheck="false"
            rows="1"
          ></S.Input>
        )}
        <p style={{ marginTop: "2.2rem" }}>
          <S.Data pageIdx={pageIdx}>{input}</S.Data>
        </p>
      </>
      {/* )} */}
    </S.Container>
  );
};

export default Quiz;
