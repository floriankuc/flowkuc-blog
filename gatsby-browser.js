import "./src/fonts/fontFaces.css";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./src/styles/theme";
import Layout from "./src/components/Layout";
import "prism-themes/themes/prism-darcula.min.css";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Layout>{element}</Layout>
  </ThemeProvider>
);
