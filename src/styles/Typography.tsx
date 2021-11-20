import React, { ReactElement } from "react";
import { Global, css } from "@emotion/react";
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
          margin: 3.5rem 0;
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
