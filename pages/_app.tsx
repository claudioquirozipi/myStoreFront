import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import myStore from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={myStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
