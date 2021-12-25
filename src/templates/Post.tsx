/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { format } from "date-fns";
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
            &:after {
              width: 0;
            }
            & > svg {
              fill: ${theme.color.accent};
            }
          }
        `}
      >
        <Back />
      </Link>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p
        css={css`
          font-style: italic;
          margin-bottom: 20px;
          font-size: 0.9rem;
        `}
      >
        {format(new Date(props.data.markdownRemark.frontmatter.date), "PPP")}
      </p>
      <div
        className="post_body"
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </div>
  );
};

export default Post;
