/** @jsx jsx */
import React, { ReactElement } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Post from "../components/Post";
import { jsx, css } from "@emotion/react";
import Seo from "./Seo";

const allBlogPostsQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date
            excerpt
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

const BlogPage = (): ReactElement => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(allBlogPostsQuery);

  return (
    <>
      <Seo title="Blog" />
      <h1>Blog</h1>
      <p>
        If I find anything worth sharing and/or elaborating you'll find my take
        on a post about it below.
      </p>
      <div
        css={css`
          margin: 32px 0;
        `}
      >
        {edges.map((edge: any, i: number, src: []) => (
          <Post
            key={edge.node.frontmatter.title}
            title={edge.node.frontmatter.title}
            date={new Date(edge.node.frontmatter.date)}
            slug={edge.node.fields.slug}
            excerpt={edge.node.frontmatter.excerpt}
            divider={!(i === src.length - 1)}
          />
        ))}
      </div>
    </>
  );
};

export default BlogPage;
