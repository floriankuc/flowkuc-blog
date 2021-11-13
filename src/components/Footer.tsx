/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React, { ReactElement } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

interface FooterProps {
  light?: string
}

const Footer = ({ light }: FooterProps): ReactElement => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <h1 style={{ margin: 0 }}>dsf</h1>

      <StyledFooter light={light}>
        footer, {data.site.siteMetadata.title}
      </StyledFooter>
      <footer
        css={css`
          background-color: orange;
        `}
      >
        footer2
      </footer>
      <footer
        css={{
          backgroundColor: "orange",
        }}
      >
        footer3
      </footer>
    </>
  )
}

const StyledFooter = styled.footer<FooterProps>`
  background-color: ${(props): string => props.theme.color.positive || "white"};
  font-family: "open_sans";
  font-weight: 400;
`

export default Footer
