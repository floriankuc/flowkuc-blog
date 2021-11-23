/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Field, FieldAttributes } from "formik";
import React, { ReactElement } from "react";
import { theme } from "../styles/theme";
import { mq } from "../utils/breakpoints";

const Input = (props: FieldAttributes<unknown>): ReactElement => (
  <Field
    {...props}
    css={css`
      width: 100%;
      padding: 8px;
      border-radius: 2px;
      border: none;

      ${mq.md} {
        width: 500px;
      }

      &:active,
      &:focus {
        outline: 4px solid ${theme.color.accent};
      }
      resize: none;
    `}
  />
);

export default Input;
