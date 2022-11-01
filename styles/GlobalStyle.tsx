import React from "react";
import styled, { createGlobalStyle } from "styled-components";
// import Background from "assets/png/desk.jpg";
const GlobalStyleWrapper = createGlobalStyle`


  * {
    box-sizing: border-box;
  }
/* @font-face {
  font-family: 'D2 coding';
  font-style: normal;
  font-weight: 400;
  src: url('D2Coding.eot');
  src: local('※'), local('D2Coding'),
       url('D2Coding.eot?#iefix') format('embedded-opentype'),
       url('D2Coding.woff2') format('x-woff2'),
       url('D2Coding.woff') format('woff'),
       url('D2Coding.ttf') format('truetype'),
       url('D2Coding.svg') format('svg');
}
@font-face {
  font-family: 'D2 coding';
  font-style: normal;
  font-weight: 700;
  src: url('D2CodingBold.eot');
  src: local('※'), local('D2Coding Bold'),
       url('D2CodingBold.eot?#iefix') format('embedded-opentype'),
       url('D2CodingBold.woff2') format('x-woff2'),
       url('D2CodingBold.woff') format('woff'),
       url('D2CodingBold.ttf') format('truetype'),
       url('D2CodingBold.svg') format('svg');
} */
  body, button, form, h1, h2, h3, h4, h5, h6, p, input, legend, li, ol, ul, select, table, td, textarea, th {
    margin:0;
    padding:0;
    background-color: #1D1D1D;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  input{
    font-family: "S-CoreDream-3Light";
    font-weight: 700;
    font-style: normal;
  }
  textarea{
    font-family: "S-CoreDream-3Light";
    font-weight: 700;
    font-style: normal;
    resize: none;
  }
  button {
    background:none;
    border:0;
    cursor:pointer;

    &:disabled {
      cursor: default;
    }
  }

  *:focus {
    outline: none;
  }

  html {
    font-size: 62.5%;

    -webkit-tap-highlight-color: transparent;
  }
  body {
    /* background-color: #D6EAF1; */

  }
  body {
  padding: 0;
  margin: 0;
  /* font-family: -apple-system, InkLipquid; */
  /* font-family: Stardust; */
  font-family: -apple-system, S-CoreDream-3Light;
}

/* @font-face {
    font-family: 'PFStardust';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/PFStardust.woff') format('woff');
    font-weight: normal;
    font-style: normal;
} */
@font-face {
  font-family: 'S-CoreDream-3Light';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}
@font-face {
  font-family: 'D2Coding';
  src: url('/public/assets/fonts/D2Coding.woff2') format('woff2');
}
@font-face {
  font-family: 'D2CodingBold';
  src: url('/public/assets/fonts/D2CodingBold.woff2') format('woff2');
}
@font-face {
  font-family: 'D2CodingTTF';
  src: url('/public/assets/fonts/D2CodingTTF.ttf') format('ttf');
}
@font-face {
  font-family: "InkLipquid";
  font-weight: 200;
  src: url("/fonts/InkLipquidFonts.ttf") format("truetype");
}
@font-face {
  font-family: 'Stardust';
  font-weight: 200;
  src: url('/fonts/PFStardust.ttf') format('truetype');
}
@font-face {
  font-family: 'StardustBold';
  src: url('/fonts/PFStardustBold.ttf') format('truetype');
}
@font-face {
  font-family: 'StardustSBold';
  src: url('/fonts/PFStardustSBold.ttf') format('truetype');
}
@font-face {
  font-family: 'StardustS';
  src: url('/fonts/PFStardustS.ttf') format('truetype');
}
  @media screen and (max-width: 415px) {
    html {
      font-size: 9.375px;
    }
  }

  @media screen and (max-width: 413px) {
    html {
      font-size: 8.75px;
    }
  }

  @media screen and (max-width: 361px) {
    html {
      font-size: 8.125px;
    }
  }

  @media screen and (max-width: 321px) {
    html {
      font-size: 7.5px;
    }
  }
`;

const Container = styled.div`
  /* font-family: "S-CoreDream-3Light"; */
  /* font-family: "NotoSerif"; */
  position: relative;
  /* -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; */
  max-width: 428px;
  width: 100vw;
  margin: 0 auto;
  font-size: 1.6rem;
  background-color: black;
`;

const Body = styled.div`
  /* background-color: black; */

  /* @media (min-width: 450px) {
    min-height: 100vh;
  } */
`;

const GlobalStyle = ({ children }) => {
  return (
    <>
      <GlobalStyleWrapper />
      <Container>
        {children}
        {/* <Body>{children}</Body> */}
      </Container>
    </>
  );
};

export default GlobalStyle;
