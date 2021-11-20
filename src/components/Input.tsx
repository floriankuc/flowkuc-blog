/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Field, FieldAttributes } from "formik";
import React, { ReactElement } from "react";
import { theme } from "../styles/theme";

const Input = (props: FieldAttributes<any>): ReactElement => {
  return (
    <Field
      {...props}
      css={css`
        width: 500px;
        padding: 8px;
        border-radius: 2px;
        border: none;

        &:active,
        &:focus {
          outline: 4px solid ${theme.color.accent};
        }
        resize: none;
      `}
    />
  );
};

export default Input;
