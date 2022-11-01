import styled, { keyframes, css } from "styled-components";
import { colors } from "styles/theme";

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
`;
