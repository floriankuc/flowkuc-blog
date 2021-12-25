/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { PropsWithChildren, ReactElement, ReactNode } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { theme } from "../styles/theme";
import styled from "@emotion/styled";

export interface Button {
  disabled?: boolean;
  loading?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  icon?: ReactNode;
}

const Button = ({
  children,
  disabled,
  loading,
  type = "submit",
  icon,
}: PropsWithChildren<Button>): ReactElement => (
  <StyledButton disabled={disabled || loading} type={type}>
    <div>
      {icon && loading ? (
        <BounceLoader size={24} color={theme.color.accent} />
      ) : (
        icon
      )}
      {children}
    </div>
  </StyledButton>
);

export default Button;

const StyledButton = styled.button`
  background-color: ${theme.color.positive};
  padding: 8px;
  border: none;
  border-radius: 2px;
  position: relative;

  &:not([disabled]) {
    &:hover,
    &:active {
      cursor: pointer;
      outline: 4px solid ${theme.color.accent};
    }
  }

  &:disabled {
    background-color: ${theme.color.secondary};

    div {
      color: ${theme.color.primary};
    }
  }

  div {
    display: flex;
    align-items: center;
    padding: 0 8px;
    color: ${theme.color.negative};
    svg {
      fill: ${theme.color.negative};
    }
    & > * {
      margin: 4px 8px 4px 0;
    }
  }
`;
