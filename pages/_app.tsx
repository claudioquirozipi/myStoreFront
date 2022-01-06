import { SnackbarProvider } from "notistack";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { CssBaseline } from "@mui/material";

import myStore from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <CssBaseline enableColorScheme />
      <Provider store={myStore}>
        <SnackbarProvider maxSnack={3}>
          <Component {...pageProps} />
        </SnackbarProvider>
      </Provider>
    </div>
  );
}

export default MyApp;
