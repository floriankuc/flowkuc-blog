import "./src/fonts/fontFaces.css"
import React from "react"
import { ThemeProvider } from "@emotion/react"
import { theme } from "./src/styles/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
