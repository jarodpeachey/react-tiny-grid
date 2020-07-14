/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, image = null, article, slug }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    defaultDescription,
    baseUrl,
    author,
  } = site.siteMetadata;

  console.log(image);
  const defaultImage = '/images/seo.png';

  return (
    <Helmet title={title || defaultTitle}>
      <meta name="description" content={description || defaultDescription} />
      <meta name="og:title" content={title || defaultTitle} />
      <meta name="og:description" content={description || defaultDescription} />
      <meta name="og:type" content="website" />
      <meta
        name="og:image"
        content={`https://react-tiny-grid.netlify.app${image}`}
      />
      <meta
        name="twitter:image"
        content={`https://react-tiny-grid.netlify.app${image}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      {/* <html lang="en" />
      <link
        rel="canonical"
        href={`https://react-tiny-grid.netlify.com${pathname}`}
      />
      <meta name="description" content={seo.description} /> */}

      {/* <meta name="og:type" content="website" />
      <meta name="og:url" content={seo.url} />
      <meta name="og:description" content={seo.description} /> */}
      {/* <meta name="og:image" content={seo.image} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="og:title" content={seo.title} />
      <meta name="twitter:test:title" content={seo.title} /> */}

      {/* <meta name="twitter:widgets:theme" content="light" /> */}
      {/* <meta name="twitter:dnt" content="on" /> */}
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      {/* <meta name="twitter:creator" content={author || '@jarod_peachey'} /> */}
      {/* <meta name="twitter:description" content={seo.description} /> */}
    </Helmet>
  );
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        baseUrl
        author
      }
    }
  }
`;

export default SEO;
