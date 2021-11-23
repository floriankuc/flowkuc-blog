/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { graphql, Link } from "gatsby";
import React, { ReactElement } from "react";
import Back from "../icons/Back";
import { theme } from "../styles/theme";

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

export interface PostTemplateProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: Date;
      };
      html: string;
    };
  };
}

const Post = (props: PostTemplateProps): ReactElement => {
  return (
    <div
      css={css`
        display: flex;
        flex-flow: column;
      `}
    >
      <Link
        to="/blog"
        css={css`
          align-self: flex-end;
          &:hover {
            box-shadow: none;
            & > svg {
              fill: ${theme.color.accent};
            }
          }
        `}
      >
        <Back />
      </Link>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </div>
  );
};

export default Post;