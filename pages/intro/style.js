import styled, { keyframes, css } from "styled-components";
import { colors } from "styles/theme";
export const camera = keyframes`
0%{
  /* left: 60%; */
  /* width: 400vw; */
  transform: translate(-30%, -50%) rotateY(-10deg) rotateX(25deg);
  font-size: 10rem;
}
50%{
  transform: translate(-50%, -50%) rotateY(-10deg) rotateX(25deg);
  font-size: 5rem;
}
  100% {
    /* left:50%; */
    /* width: 200vw; */
    /* transform: translate(-50%, -50%) rotateY(0deg) rotateX(0deg); */
    font-size: 5rem;
  }
`;
export const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;
export const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${colors.mainpurple};
  transform-style: preserve-3d;
  perspective: 400px;
  overflow: hidden;
  position: relative;
  background-image: linear-gradient(
      90deg,
      rgba(128, 62, 228, 1) 50%,
      transparent 50%
    ),
    linear-gradient(rgba(128, 62, 228, 1) 50%, transparent 50%);
  background-size: 4px 4px;
`;
export const ThreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  transform: translate(-50%, -50%) rotateY(-10deg) rotateX(25deg);
  width: 400vw;
  height: 400vh;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: ${colors.mainpurple};
  justify-content: center;
  background-image: linear-gradient(
      90deg,
      rgba(128, 62, 228, 1) 50%,
      transparent 50%
    ),
    linear-gradient(rgba(128, 62, 228, 1) 50%, transparent 50%);
  background-size: 4px 4px;
  transition: 3s linear;
  place-items: center;
  animation: ${camera} 4s 0.6s forwards;
`;

export const SearchBar = styled.div`
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
  border-radius: 10000px;
  border: 3px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;
`;
// export const SearchBarPixel = styled(SearchBar)`
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   /* height: 0; */
//   padding: 0.1px;
//   background-color: #eee;
// `;
// export const Text = styled.div`
//   font-family: D2Coding;
//   font-size: 2rem;
//   width: auto;
//   animation: ${typing} 2s steps(8), ${blink} 0.5s step-end infinite alternate;
//   white-space: nowrap;
//   overflow: hidden;
//   border-right: 2px solid;
// `;
