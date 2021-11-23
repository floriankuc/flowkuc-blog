import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export interface SeoProps {
  description: string;
  lang: string;
  meta: [];
  title: string;
}

const Seo = ({ description, lang, meta, title }: SeoProps): ReactElement => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `${defaultTitle} | %s` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  );
};

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default Seo;
