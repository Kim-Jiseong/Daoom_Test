import styled, { keyframes, css } from "styled-components";
import { colors } from "styles/theme";
export const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;
export const Text = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  animation: ${blink} 0.5s step-end infinite alternate;
  white-space: nowrap;
  /* color: transparent; */
  background-color: #6d6a6a;
  background-image: linear-gradient(
      90deg,
      rgba(56, 56, 56, 0.5) 50%,
      transparent 50%
    ),
    linear-gradient(rgba(56, 56, 56, 0.5) 50%, transparent 50%);
  background-size: 4px 4px;
  background-clip: text;
  -webkit-background-clip: text;
  border-right: 4px solid #6d6a6a;
  /* font-family: D2Coding; */
`;
