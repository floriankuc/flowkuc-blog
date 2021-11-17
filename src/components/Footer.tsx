/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import { ReactElement } from "react";
import { theme } from "../styles/theme";
import { FOOTERLINKS } from "../content/links";

const Footer = (): ReactElement => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  return (
    <StyledFooter>
      <div
        css={css`
          margin-bottom: 8px;
        `}
      >
        {FOOTERLINKS.map(link => (
          <StyledLink key={link.title} href={link.to}>
            {link.icon}
          </StyledLink>
        ))}
      </div>
      © {new Date().getFullYear()}, {data.site.siteMetadata.author}
    </StyledFooter>
  );
};

const StyledLink = styled.a`
  margin: 8px;

  &:hover {
    box-shadow: none;
    svg {
      fill: ${theme.color.accent};
    }
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100;
  font-size: 0.75rem;
  padding-bottom: 12px;
`;

export default Footer;
