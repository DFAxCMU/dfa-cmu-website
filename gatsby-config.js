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
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: "gatsby-transformer-csv",
      options: {
        nodePerFile: false
      }
    }
  ],
};
