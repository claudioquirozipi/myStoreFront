import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import myStore from "../store";
import { CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <CssBaseline enableColorScheme />
      <Provider store={myStore}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
