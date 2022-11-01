import styled, { keyframes, css } from "styled-components";
import { colors } from "styles/theme";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  position: relative;
  background-color: ${colors.ivory};
  /* perspective: 1000px; */
`;
export const Background = styled.img`
  width: 100%;
  /* background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: auto; */
  object-fit: cover;
  display: block;
`;
export const ContentWrapper = styled.div`
  width: 100%;
  display: inline-block;
  text-align: center;
  position: absolute;
  background-color: ${colors.ivory};
  /* transform: rotateX(20deg);
  ${(props) =>
    props.animation &&
    css`
      transition: all 3s;
      transform-origin: center left;
      transform: rotateX(10deg) rotateY(-180deg);
    `} */
`;
export const PrevBtn = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  word-break: keep-all;
  margin-top: 2rem;
  color: ${colors.lightbrown};
  position: absolute;
  bottom: 10%;
  left: 10%;
  cursor: pointer;
`;
export const NextBtn = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  word-break: keep-all;
  margin-top: 2rem;
  color: ${colors.lightbrown};
  position: absolute;
  bottom: 10%;
  right: 10%;
  cursor: pointer;
`;
export const Btn = styled.label`
  margin-top: 2rem;
  width: 100%;
  height: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;
  color: white;
  background-color: ${colors.lightbrown};
  font-size: 2rem;
  transition: all 0.5s;
  border: 2px solid ${colors.lightbrown};
  &:hover {
    background-color: transparent;
    color: ${colors.lightbrown};
  }
`;
