import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import * as S from "./style";
// import Background from "/public/assets/background.png";
// import Original from "/public/assets/originalcrop.png";
// import Texture from "/public/assets/texture.png";
const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <S.Container>INDEX</S.Container>
    </div>
  );
};

export default Home;
