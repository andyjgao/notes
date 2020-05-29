const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Andy J Gao's notes`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-andy`,
      options: {
        rootNote: `home`,
        hideDoubleBrackets: "true",
      },
    
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-162644416-3",
      },
    },
  ],
};
