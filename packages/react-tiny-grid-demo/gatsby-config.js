module.exports = {
  siteMetadata: {
    title: 'React Tiny Grid - Lightweight React Grid System',
    description:
      'A dead-simple grid system that works out-of-the-box, with advanced configuration options.',
    defaultTitle: 'Jarod Peachey - Front End Web Developer',
    defaultDescription:
      'A dead-simple grid system that works out-of-the-box, with advanced configuration options.',
    baseUrl: 'react-tiny-grid.netlify.app',
    author: '@jarodpeachey',
    socials: {
      twitter: `https://twitter.com/jarodpeachey`,
      github: `https://github.com/jarodpeachey/react-tiny-grid`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-172753805-1',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-anchor-links',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-sitemap',
  ],
};
