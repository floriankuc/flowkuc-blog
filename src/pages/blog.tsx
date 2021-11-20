import React, { ReactElement } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const BlogPage = (): ReactElement => {
  const query = useStaticQuery(graphql`
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
            excerpt
          }
        }
      }
    }
  `);
  return (
    <>
      <h1>Blog</h1>
      <p>
        Some of the plentiful problems I encounter as a developer aren't
        necessarily always presented on the web in the thorough fashion I'd love
        to see. If I find anything worth sharing you'll find my take on a post
        about it below.
      </p>
      <ul>
        {query.allMarkdownRemark.edges.map((edge: any) => {
          return (
            <li key={edge.node.frontmatter.title}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BlogPage;
