/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React, { ReactElement } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { theme } from "../styles/theme";

const Loading = (): ReactElement => {
  return (
    <div
      css={css`
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
      `}
    >
      <BounceLoader color={theme.color.accent} />
    </div>
  );
};

export default Loading;
