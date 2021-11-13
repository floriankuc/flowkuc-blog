import React from "react"
import { Global, css } from "@emotion/react"
import { theme } from "./theme"

export default function Typography() {
  return (
    <Global
      styles={css`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        span,
        div {
          font-family: "open_sans";
          font-weight: 400;
          text-rendering: optimizeLegibility;
          color: ${theme.color.positive};
        }
      `}
    />
  )
}
