module.exports = {
  siteMetadata: {
    title: `Test blog`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/posts/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-typescript`
  ]
};
