module.exports = {
  siteMetadata: {
    title: "DFAxCMU",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
        ignore: [`**/\.`]
      }
    },
    "gatsby-transformer-csv",
    "gatsby-transformer-json"
  ],
};
