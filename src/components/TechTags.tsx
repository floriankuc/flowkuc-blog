/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import React, { ReactElement } from "react"
import TECHTAGS from "../content/techTags"
import { theme } from "../styles/theme"

const TechTags = (): ReactElement => {
  const renderTags = (tags: string[]) =>
    tags.map(tag => <Tag key={tag}>{tag}</Tag>)

  return (
    <div
      css={css`
        display: inline-flex;
        flex-flow: wrap;
        gap: 20px;
        padding: 40px;
      `}
    >
      {renderTags(TECHTAGS)}
    </div>
  )
}

const Tag = styled.div`
  background-color: ${theme.color.secondary};
  display: inline;
  padding: 4px 12px;
  border-radius: 2px;
`

export default TechTags
