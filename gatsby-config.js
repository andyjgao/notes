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
  ],
};
