/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ReactElement } from "react";
import TECHTAGS from "../content/techTags";
import { theme } from "../styles/theme";

export interface TechTagsProps {
  tags?: string[];
  small?: boolean;
}

const TechTags = ({ small, tags = TECHTAGS }: TechTagsProps): ReactElement => {
  const renderTags = (tags: string[]) =>
    tags.map(tag => (
      <Tag small={small} key={tag}>
        <p>{tag}</p>
      </Tag>
    ));

  return (
    <div
      css={{
        display: "inline-flex",
        flexFlow: "wrap",
        gap: 20,
        padding: small ? 0 : 60,
      }}
    >
      {renderTags(tags)}
    </div>
  );
};

const Tag = styled.div<TechTagsProps>`
  background-color: ${theme.color.secondary};
  display: inline;
  padding: 4px 12px;
  border-radius: 2px;

  & p {
    font-size: ${({ small }): string => (small ? ".8rem" : "1.1rem")};
  }
`;

export default TechTags;
