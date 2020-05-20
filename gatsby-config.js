const path = require('path');

module.exports = {
  
  plugins: [
    {
      resolve: `gatsby-theme-andy`,
      options: {
        rootNote: `home`,
        hideDoubleBrackets: true,
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
