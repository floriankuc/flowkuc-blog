/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import React, { ReactElement } from "react";
import { theme } from "../styles/theme";
import { LinkType, NAVLINKS } from "../content/links";

const activeStyles = {
  color: theme.color.accent,
};

const Header = (): ReactElement => {
  const renderLinks = (links: LinkType[]): ReactElement[] => {
    return links.map(({ to, title }) => (
      <StyledLink
        to={to}
        key={title}
        activeStyle={activeStyles}
        partiallyActive={title === "Blog"}
      >
        {title}
      </StyledLink>
    ));
  };

  return (
    <header
      css={css`
        position: sticky;
        top: 0;
        height: 100px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: ${theme.color.primary};
      `}
    >
      {renderLinks(NAVLINKS)}
    </header>
  );
};

const StyledLink = styled(Link)`
  color: ${theme.color.positive};
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 900;
  margin-right: 32px;
  position: relative;

  &:after {
    position: absolute;
    transition: 0.15s ease-in-out;
    content: "";
    width: 0;
    left: 0;
    bottom: 0;
    height: 2px;
    background: ${theme.color.accent};
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }
`;

export default Header;
