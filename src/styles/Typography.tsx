import { css, Global } from "@emotion/react";
import React, { ReactElement } from "react";
import { mqMax } from "../utils/breakpoints";
import { theme } from "./theme";

const Typography = (): ReactElement => {
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
          font-size: 1.1rem;
          line-height: 1.6;
        }

        h1 {
          font-size: 4rem;
          font-weight: 900;
          margin: 1rem 0 3.5rem 0;

          ${mqMax.sm} {
            font-size: 3.5rem;
            font-weight: 900;
            margin: 0 0 2rem 0;
          }
        }

        h2 {
          font-size: 2rem;
          font-weight: 900;
          margin-bottom: 32px;
        }

        h3 {
          font-size: 1.8rem;
          font-weight: 700;
        }

        code,
        code * {
          font-family: monospace !important;
        }

        .error {
          color: #ff2424;
          font-weight: 700;
        }
      `}
    />
  );
};

export default Typography;
