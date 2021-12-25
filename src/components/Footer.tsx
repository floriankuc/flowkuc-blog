/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import { ReactElement } from "react";
import { theme } from "../styles/theme";
import { FOOTERLINKS, LinkType } from "../content/links";

const footerQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;

const Footer = (): ReactElement => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(footerQuery);

  const renderFooterLinks = (links: LinkType[]): ReactElement[] => {
    return links.map(({ title, to, icon }) => (
      <StyledLink key={title} href={to} className="iconlink">
        {icon}
      </StyledLink>
    ));
  };

  return (
    <StyledFooter>
      <div
        css={css`
          margin-bottom: 8px;
        `}
      >
        {renderFooterLinks(FOOTERLINKS)}
      </div>
      © {new Date().getFullYear()}, {author}
    </StyledFooter>
  );
};

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

const StyledFooter = styled.footer`
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100;
  font-size: 0.75rem;
  padding-bottom: 12px;
`;

export default Footer;
