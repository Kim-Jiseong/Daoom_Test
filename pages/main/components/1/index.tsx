import React, { useEffect, useState, useCallback, StrictMode } from "react";
import * as S from "./style";
import { useRecoilState } from "recoil";
import pageIdxAtom from "atoms/pageIdxAtom";
import filesAtom from "atoms/filesAtom";
import * as dayjs from "dayjs";
const Main = () => {
  const [pageIdx, setPageIdx] = useRecoilState(pageIdxAtom);
  const [today, setToday] = useState(dayjs(new Date()).format("YYYY-MM-DD"));
  const [date, setDate] = useState(localStorage.getItem("date"));
  const [input, setInput] = useState(localStorage.getItem("diary"));
  const [imageSrc, setImageSrc] = useState(localStorage.getItem("imageSrc"));
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        localStorage.setItem("imageSrc", reader.result);
        resolve();
      };
    });
  };
  // -------------------------날짜 세팅
  useEffect(() => {
    console.log("page", pageIdx);
  }, [pageIdx]);

  const dateSetting = (e) => {
    localStorage.setItem("date", e.target.value);
  };
  useEffect(() => {
    const dateField = document.getElementById("currentDate");

    if (localStorage.getItem("date") === null) {
      localStorage.setItem("date", today);
      dateField.value = today;
    } else {
      dateField.value = localStorage.getItem("date");
    }
  }, [today]);

  // ---------------------리사이즈
  const valueCtl = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
  };
  const autoResizeTextarea = () => {
    let textarea = document.querySelector(".autoTextarea");
    localStorage.setItem("diary", input);
    if (textarea) {
      textarea.style.height = "auto";
      let height = textarea.scrollHeight; // 높이
      textarea.style.height = `${height + 8}px`;
    }
  };
  return (
    <S.Container>
      {pageIdx === 2 && (
        <S.DateWrapper>
          <S.Title>날짜를 입력해주세요</S.Title>
          <S.Input
            type="date"
            onChange={dateSetting}
            id="currentDate"
          ></S.Input>
        </S.DateWrapper>
      )}
      {pageIdx === 3 && (
        <S.WeatherWrapper>
          <S.Title>날씨는 어땠나요?</S.Title>
          <S.Title>
            <i className="bi-brightness-high"></i>
          </S.Title>

          {/* <select name="weather">
            <option value="bright">

            </option>
            <option value=""></option>
          </select> */}
        </S.WeatherWrapper>
      )}
      {pageIdx === 4 && (
        <S.PhotoWrapper>
          <S.Title>오늘의 사진을 올려주세요</S.Title>
          {/* {!imageSrc && <S.Title>오늘의 사진을 올려주세요</S.Title>} */}
          {/* {imageSrc && <S.Title>사진에 태그를 붙여주세요</S.Title>} */}
          <S.PhotoBox>
            <S.AddBtn htmlFor="file">
              <i className="bi bi-plus"></i>
            </S.AddBtn>
            {imageSrc && <S.Photo src={imageSrc} className="img_box"></S.Photo>}
          </S.PhotoBox>
          <S.PhotoInput
            type="file"
            id="file"
            accept="image/*"
            onChange={(e) => {
              encodeFileToBase64(e.target.files[0]);
            }}
          />

          {imageSrc && (
            <S.Btn
              onClick={() => {
                setImageSrc("");
                localStorage.removeItem("imageSrc");
              }}
            >
              파일삭제
            </S.Btn>
          )}
        </S.PhotoWrapper>
      )}
      {pageIdx === 5 && (
        <S.PhotoWrapper>
          <S.Title>사진에 태그를 붙여주세요</S.Title>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <S.HashTag>#대학 축제</S.HashTag>
            <S.HashTag>#첫차</S.HashTag>
          </div>
        </S.PhotoWrapper>
      )}
      {pageIdx === 6 && (
        <S.PhotoWrapper>
          <S.Title>오늘 하루는 어땠나요?</S.Title>
          <S.DiaryInput
            type="text"
            className="autoTextarea"
            value={input}
            pageIdx={pageIdx}
            onChange={valueCtl}
            onClick={autoResizeTextarea}
            onKeyDown={autoResizeTextarea}
            onKeyUp={autoResizeTextarea}
            spellcheck="false"
            rows="1"
          ></S.DiaryInput>
        </S.PhotoWrapper>
      )}
      {pageIdx === 7 && (
        <S.ResultContainer>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {" "}
            <S.ResultDate>{localStorage.getItem("date")}</S.ResultDate>
            <S.ResultDate style={{ animationDelay: "1.5s" }}>
              <i className="bi-brightness-high"></i>
            </S.ResultDate>{" "}
          </div>

          <S.PhotoBox
            style={{
              marginTop: "10vh",
            }}
          >
            <S.MaskingTape></S.MaskingTape>
            {imageSrc && <S.Photo src={imageSrc} className="img_box"></S.Photo>}
          </S.PhotoBox>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "0rem",
              alignItems: "center",
              marginBottom: "4vh",
            }}
          >
            <S.HashTag>#대학 축제</S.HashTag>
            <S.HashTag>#첫차</S.HashTag>
          </div>
          <S.ResultDiary>{input}</S.ResultDiary>
        </S.ResultContainer>
      )}
    </S.Container>
  );
};

export default Main;
