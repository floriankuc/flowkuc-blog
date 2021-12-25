/** @jsx jsx */
import { Link } from "gatsby";
import React, { ReactElement } from "react";
import { format } from "date-fns";
import { css, jsx } from "@emotion/react";
import { theme } from "../styles/theme";

export interface Post {
  title: string;
  date: Date;
  slug: string;
  excerpt: string;
  divider?: boolean;
}

const Post = ({ title, date, slug, excerpt, divider }: Post): ReactElement => (
  <Link to={`/blog/${slug}`}>
    <div
      css={css`
        padding: 20px 0;
        border-radius: 2px;
        position: relative;

        &:after {
          content: "";
          transition: 0.15s ease-in-out;
          position: absolute;
          width: 2px;
          height: 0;
          top: 0;
          left: -6px;
          background-color: ${theme.color.accent};
        }

        &:hover {
          &:after {
            height: 100%;
          }
          h3 {
            color: ${theme.color.accent};
          }
        }
      `}
    >
      <h3>{title}</h3>
      <p
        css={css`
          font-style: italic;
          margin-bottom: 1rem;
        `}
      >
        {format(date, "PP")}
      </p>
      <p>{excerpt}</p>
    </div>
    {divider && (
      <hr
        css={css`
          margin: 10px 0 0;
        `}
      />
    )}
  </Link>
);

export default Post;
