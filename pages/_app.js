import { ThemeProvider, theme, CSSReset } from "@chakra-ui/react";
import Amplify from "aws-amplify";

import awsconfig from "../src/aws-exports";
import "../styles/globals.css";

Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
