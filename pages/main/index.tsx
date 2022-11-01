import React, { useEffect, useState, useCallback, useRef } from "react";
import * as S from "./style";
import Component0 from "./components/0/index";
import Component1 from "./components/1/index";
import { useRecoilState } from "recoil";
import pageIdxAtom from "atoms/pageIdxAtom";
const Main = (props) => {
  const [pageIdx, setPageIdx] = useRecoilState(pageIdxAtom);
  const [animation, setAnimation] = useState(false);
  const book = useRef();
  const nextButtonClick = () => {
    setPageIdx(pageIdx + 1);
  };

  const prevButtonClick = () => {
    setPageIdx(pageIdx - 1);
  };

  return <S.Container></S.Container>;
};

export default Main;
