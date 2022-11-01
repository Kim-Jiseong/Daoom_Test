import styled, { keyframes, css } from "styled-components";
import { colors } from "styles/theme";
export const opacity = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;
export const floating = keyframes`
100% {
    top: -4px;
    text-shadow: 0 1px 0 #d3A177,
                 0 2px 0 #d3A177,
                 0 3px 0 #d3A177,
                 0 4px 0 #d3A177,
                 0 5px 0 #d3A177,
                 0 6px 0 #d3A177,
                 0 7px 0 #d3A177,
                 0 8px 0 #d3A177,
                 0 9px 0 #d3A177,
                 0 50px 25px rgba(0, 0, 0, .2);
  }
  `;

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* top: 50%;
  left: 50%; */
  transform: translate(0%, -50%);
  margin-top: 50vh;
  animation: ${opacity} 1s;
  transition: 1s;
  /* ${(props) =>
    props.pageIdx !== 0 &&
    css`
      margin-top: 30vh;
    `} */
`;
export const Icon = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  word-break: keep-all;
  margin-top: 2rem;
  color: ${colors.lightbrown};
  position: relative;
  top: 4px;
  display: inline-block;
  animation: ${floating} 1s ease infinite alternate;
  text-shadow: 0 1px 0 #d3a177, 0 2px 0 #d3a177, 0 3px 0 #d3a177,
    0 4px 0 #d3a177, 0 5px 0 #d3a177, 0 6px 0 transparent, 0 7px 0 transparent,
    0 8px 0 transparent, 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
`;
export const Title = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  word-break: keep-all;
  text-align: center;
  margin-top: 2rem;
  color: ${colors.lightbrown};
`;
export const Input = styled.textarea`
  width: 100%;
  color: ${colors.lightbrown};
  /* height: 2.4rem; */
  margin-top: 2.2rem;
  font-size: 2rem;
  font-weight: 700;
  /* padding: 1rem; */
  border: none;
  background: transparent;
  min-height: 1rem;
  overflow-y: hidden;
  border-bottom: 2px solid ${colors.lightbrown};
  /* transition: 1s; */
  ${(props) =>
    props.pageIdx !== 0 &&
    css`
      border-bottom: none;
      background: linear-gradient(to top, #fff 50%, transparent 50%);
    `}
`;
export const Quote = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  word-break: keep-all;
  margin-top: 2rem;
  color: ${colors.lightbrown};
`;
export const RQuote = styled(Quote)`
  transform: rotate(180deg);
`;
export const ReloadBtn = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  word-break: keep-all;
  margin-top: 2rem;
  color: ${colors.lightbrown};
  position: absolute;
  right: 0;
  cursor: pointer;
  &:hover i {
    transform: rotate(90deg);
    transition: 0.3s;
  }
`;
export const Data = styled.span`
  color: ${colors.lightbrown};
  margin-top: 2.2rem;
  font-size: 2rem;
  font-weight: 700;
  /* display: inline-block; */
  position: relative;

  /* box-shadow: inset 0 -0px 0 #b0e0e6; */
  /* &::after {
    content: "";
    width: 0;
    height: 10px;
    background: #d9fcdb;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  } */
  background: linear-gradient(to left, #d9fcdb 50%, transparent 50%);

  background-size: 200%;
  /* background-size: 200% 10px; */
  ${(props) =>
    props.pageIdx === 0 &&
    css`
      visibility: hidden;
    `}
  ${(props) =>
    props.pageIdx !== 0 &&
    css`
      /* box-shadow: inset 0 -10px 0 #b0e0e6;
      transition: all 1s; */
      /* &::after {
        width: 100%;
        transition: 1s all;
      } */
      transition: all 1s;
      background-position: -100% 0;
    `}
`;
