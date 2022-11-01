import React, { useEffect, useState, useCallback } from "react";
import * as S from "./style";
import { useRecoilState } from "recoil";
import pageIdxAtom from "atoms/pageIdxAtom";
import filesAtom from "atoms/filesAtom";
import * as dayjs from "dayjs";
const Main = () => {
  const [pageIdx, setPageIdx] = useRecoilState(pageIdxAtom);
  const [today, setToday] = useState(dayjs(new Date()).format("YYYY-MM-DD"));
  const [date, setDate] = useState(localStorage.getItem("date"));

  const [files, setFiles] = useState(localStorage.getItem("files"));

  const onLoadFile = (e) => {
    const file = e.target.files;
    console.log(file);
    setFiles(file);
  };

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
  useEffect(() => {
    console.log("page", pageIdx);
  }, [pageIdx]);
  const preview = () => {
    if (!files) return false;
    const imgEl = document.querySelector(".img_box");
    const reader = new FileReader();
    reader.onload = () => {
      imgEl.src = `${reader.result}`;
    };

    reader.readAsDataURL(files[0]);
  };
  useEffect(() => {
    preview();
    // return preview();
  });
  useEffect(() => {
    localStorage.setItem("files", files);
  }, [files]);

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
          <select name="weather">
            <option value="bright">
              <i className="bi-brightness-high"></i>
            </option>
            <option value=""></option>
          </select>
        </S.WeatherWrapper>
      )}
      {pageIdx === 4 && (
        <S.WeatherWrapper>
          <S.Title>오늘의 사진을 올려주세요</S.Title>
          <S.PhotoBox>
            <S.Photo className="img_box"></S.Photo>
          </S.PhotoBox>
          <input type="file" id="image" accept="img/*" onChange={onLoadFile} />
        </S.WeatherWrapper>
      )}
    </S.Container>
  );
};

export default Main;
