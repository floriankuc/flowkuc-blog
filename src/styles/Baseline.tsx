import React, { ReactElement } from "react";
import { Global, css } from "@emotion/react";
import { theme } from "./theme";
import { mq } from "../utils/breakpoints";

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
        overflow-y: scroll;
      }

      #___gatsby {
        height: 100vh;
      }

      a:not([class]) {
        text-decoration-skip-ink: auto;
      }

      hr {
        height: 3px;
        margin: 52px 0;
        border: none;
        background-color: ${theme.color.secondary};
        border-radius: 1px;
      }

      svg {
        fill: #ffffff;
      }

      a,
      button,
      input {
        transition: 0.07s ease-out;
      }

      a {
        color: ${theme.color.accent};
        text-decoration: none;
        font-weight: 700;

        &:hover {
          box-shadow: inset 0 -3px 0 0 ${theme.color.accent};
        }
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

      .container {
        display: flex;
        flex-flow: column;
        margin: 0 auto;
        width: 90%;
        min-height: 100%;
        /* ${[mq.md]} {
          width: 80%;
        }
        ${[mq.lg]} {
          width: 70%;
        }
        ${[mq.xl]} {
          width: 60%;
        }
        ${[mq.xxl]} {
          width: 50%;
        }
        ${[mq.wow]} {
          width: 40%;
        } */
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
);

export default Baseline;
