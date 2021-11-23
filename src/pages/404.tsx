/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "gatsby";
import React, { ReactElement } from "react";
import Seo from "./Seo";

const NotFound = (): ReactElement => (
  <>
    <Seo title="404" />
    <div
      css={css`
        display: flex;
        flex-flow: column;
        align-items: center;
      `}
    >
      <h1>404</h1>
      <h2>Couldn't find this page</h2>
      <Link to="/">Go to start</Link>
    </div>
  </>
);

export default NotFound;
