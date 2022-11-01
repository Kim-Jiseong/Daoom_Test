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
export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const Title = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  word-break: keep-all;
  text-align: center;
  margin-top: 2rem;
  color: ${colors.lightbrown};
  animation: ${opacity} 1s;
`;
export const DateWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50vh;
  transform: translate(0, -50%);
  animation: ${opacity} 1s;
`;
export const WeatherWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50vh;
  transform: translate(0, -50%);
  animation: ${opacity} 1s;
`;
export const PhotoWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50vh;
  transform: translate(0, -50%);
  animation: ${opacity} 1s;
`;
export const PhotoInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;
export const AddBtn = styled.label`
  width: 100%;
  height: 100%;
  position: absolute;
  /* background-color: grey; */
  top: 50%;
  left: 50%;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  & i {
    color: ${colors.lightbrown};
    transition: all 0.5s;
  }
  &:hover i {
    transform: rotate(270deg);
    color: white;
  }
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
  animation: ${opacity} 1s;
  &:hover {
    background-color: transparent;
    color: ${colors.lightbrown};
  }
`;
export const PhotoBox = styled.div`
  width: 100%;
  position: relative;
  margin-top: 2rem;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  border: 8px solid white;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  pointer-events: none;
`;
export const Date = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50vh;

  transform: translate(0, -50%);
  ${(props) =>
    props.pageIdx > 2 &&
    css`
      transition: 1s;
      margin-top: 30vh;
    `}
`;
export const Input = styled.input`
  width: 100%;
  color: ${colors.lightbrown};
  /* height: 2.4rem; */
  margin-top: 2.2rem;
  font-size: 2.8rem;
  font-weight: 700;
  text-align: center;
  border: none;
  background: transparent;
  cursor: pointer;
  border-bottom: 2px solid ${colors.lightbrown};
`;
export const DiaryInput = styled.textarea`
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
`;

export const ResultContainer = styled.div`
  width: 80%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  animation: ${opacity} 1s;
  /* align-items: center; */
`;
export const ResultDate = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  word-break: keep-all;
  text-align: left;
  margin-top: 2rem;
  color: ${colors.lightbrown};
  opacity: 0;
  animation: ${opacity} 1s forwards;
  animation-delay: 1s;
`;
export const MaskingTape = styled.div`
  width: 40%;
  height: 4rem;
  background: rgba(212, 164, 126, 0.7);
  position: absolute;
  z-index: 2;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${opacity} 1s forwards;
  animation-delay: 2s;
  opacity: 0;
`;

export const ResultDiary = styled.div`
  font-size: 2rem;
  font-weight: 700;
  word-break: keep-all;
  text-align: left;
  margin-top: 2rem;
  color: ${colors.lightbrown};
  animation: ${opacity} 1s forwards;
  animation-delay: 2.5s;
  opacity: 0;
`;
export const HashTag = styled(Title)`
  font-size: 2rem;
  font-weight: 700;
  margin-right: 2rem;
  /* opacity: 0; */
  /* animation: ${opacity} 1s;
  animation-delay: 2s; */
`;
