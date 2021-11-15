import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

export interface HeadData {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

export const headQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export interface HeadProps {
  title: string
}

const Head: React.FC<HeadProps> = ({ title }: HeadProps) => {
  const data = useStaticQuery(headQuery)

  return <Helmet title={`${data.site.siteMetadata.title} | ${title}`} />
}

export default Head
