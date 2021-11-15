/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import React, { ReactElement } from "react"
import { theme } from "../styles/theme"
import { LinkType, NAVLINKS } from "../content/links"

const activeStyles = {
  color: theme.color.accent,
}

const Header = (): ReactElement => {
  const renderLinks = (links: LinkType[]): ReactElement[] => {
    return links.map(({ to, title }) => (
      <StyledLink to={to} key={title} activeStyle={activeStyles}>
        {title}
      </StyledLink>
    ))
  }

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        height: 100,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      {renderLinks(NAVLINKS)}
    </header>
  )
}

const StyledLink = styled(Link)`
  color: ${theme.color.positive};
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 700;
  margin-right: 32px;

  &:hover {
    box-shadow: inset 0 -2px 0 0 ${theme.color.accent};
  }
`
export default Header
