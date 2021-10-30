import React, { Component } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>blog </h1>
      <ol>
        {data.allMarkdownRemark.edges.map((edge: any) => {
          return (
            <li key={edge.node.frontmatter.title}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
