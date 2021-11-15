import { graphql } from "gatsby"
import React, { Component, ReactElement } from "react"

const Blog = (props: any): ReactElement => {
  const data = graphql`
    query ($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        frontmatter {
          title
          date
        }
        html
      }
    }
  `

  return (
    <>
      {/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      /> */}
    </>
  )
}

export default Blog
