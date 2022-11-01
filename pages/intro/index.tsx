import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import * as S from "./style";
import TypingText from "./components/typingText";
const Home: NextPage = () => {
  const [text, setText] = useState("당신의 하루는??");
  const router = useRouter();
  return (
    <S.Container>
      <S.ThreeContainer>
        <S.SearchBar>
          <TypingText
            text={text}
            speed={500}
            color="transparent"
            // fontSize="10rem"
            weight={700}
            // fontFamily={"Stardust"}
          />
          &nbsp;
        </S.SearchBar>
      </S.ThreeContainer>
    </S.Container>
  );
};

export default Home;
