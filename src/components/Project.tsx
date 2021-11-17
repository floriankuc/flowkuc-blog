/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ReactElement } from "react";
import ExternalLink from "../icons/ExternalLink";
import Github from "../icons/Github";
import { theme } from "../styles/theme";
import TechTags from "./TechTags";

export interface ProjectProps {
  name?: string;
  description?: string;
  topics?: string[];
  gh_url?: string;
  web_url?: string;
}

const Project = ({
  name,
  description,
  topics,
  gh_url,
  web_url,
}: ProjectProps): ReactElement => {
  return (
    <div
      css={css`
        width: 100%;
        border: 1px solid ${theme.color.secondary};
        border-radius: 2px;
        padding: 4px;
        display: flex;
        justify-content: space-between;
      `}
    >
      <div
        css={css`
          display: grid;
          gap: 16px;
          padding: 10px;
        `}
      >
        <h2 style={{ fontWeight: 700 }}>{name}</h2>
        <p>{description}</p>
        {topics && topics.length > 0 && <TechTags tags={topics} small />}
      </div>
      <div
        css={css`
          display: flex;
          flex-flow: column;
        `}
      >
        {gh_url && (
          <StyledLink href={gh_url}>
            <Github />
          </StyledLink>
        )}
        {web_url && (
          <StyledLink href={web_url}>
            <ExternalLink />
          </StyledLink>
        )}
      </div>
    </div>
  );
};

export default Project;

const StyledLink = styled.a`
  margin: 8px;

  &:hover {
    box-shadow: none;
    svg {
      fill: ${theme.color.accent};
    }
  }
`;
