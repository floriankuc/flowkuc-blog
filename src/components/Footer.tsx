/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React, { Component } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

interface FooterProps {
  light: string
}

const Footer = ({ light }: FooterProps) => {
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
  background-color: ${(props): string => props.light};
  font-family: "open_sans";
  font-weight: bold;
`

export default Footer
