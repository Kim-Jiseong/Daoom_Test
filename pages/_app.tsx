import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import GlobalStyle from "../styles/GlobalStyle";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </RecoilRoot>
  );
}

export default MyApp;
