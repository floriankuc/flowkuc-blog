import React, { Component } from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <div>footer, {data.site.siteMetadata.title}</div>
}
export default Footer
