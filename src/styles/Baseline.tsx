import React, { ReactElement } from "react"
import { Global, css } from "@emotion/react"
import { theme } from "./theme"

const Baseline = (): ReactElement => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      ul[role="list"],
      ol[role="list"] {
        list-style: none;
      }

      html:focus-within {
        scroll-behavior: smooth;
      }

      body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        background-color: ${theme.color.primary};
      }

      a:not([class]) {
        text-decoration-skip-ink: auto;
      }

      img,
      picture {
        max-width: 100%;
        display: block;
      }

      input,
      button,
      textarea,
      select {
        font: inherit;
      }

      @media (prefers-reduced-motion: reduce) {
        html:focus-within {
          scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
    `}
  />
)

export default Baseline
