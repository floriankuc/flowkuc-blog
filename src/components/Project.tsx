/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ReactElement, ReactNode } from "react";
import ExternalLink from "../icons/ExternalLink";
import Github from "../icons/Github";
import { theme } from "../styles/theme";
import { capitalise, pipe, unhyphen } from "../utils/helpers";
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
  const renderTopics = (topics: string[]): ReactElement => (
    <TechTags tags={topics} small />
  );

  const renderIconLink = (url: string, icon: ReactNode): ReactElement => (
    <StyledLink href={url}>{icon}</StyledLink>
  );

  const formatName = (name: string): string => pipe(unhyphen, capitalise)(name);

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
        <h3>{name && formatName(name)}</h3>
        <p>{description}</p>
        {topics && topics.length > 0 && renderTopics(topics)}
      </div>
      <div
        css={css`
          display: flex;
          flex-flow: column;
        `}
      >
        {gh_url && renderIconLink(gh_url, <Github />)}
        {web_url && renderIconLink(web_url, <ExternalLink />)}
      </div>
    </div>
  );
};

export default Project;

const StyledLink = styled.a`
  margin: 8px;

  &:hover {
    &:after {
      width: 0;
    }
    box-shadow: none;
    svg {
      fill: ${theme.color.accent};
    }
  }
`;
