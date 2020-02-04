console.log("gatsby config!")

module.exports = {
  siteMetadata: {
    title: `Template title`,
    description: `Template description`,
    author: `Pseudocoder Kim`,
    bannerTitle: "Life in Pseudocode.",
    bannerDescription: "Blog by Pseudocoder Kim",
    bannerProfileUrl:
      "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    githubUrl: "https://www.github.com/digression99",
    linkedinUrl: "https://www.linkedin.com/in/ilsik-kim-64b6a1a7",
    landingAuthor: {
      displayName: "Pseudocoder Kim",
      picUrl:
        "https://images.pexels.com/photos/2851815/pexels-photo-2851815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      introduction: "Forever One-sided Lover of JavaScript, Vim, and CrossFit.",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        queryLimit: 1000,
        contentTypes: ["post", "user"],
        loginData: {
          identifier: "test-user",
          password: "test-user",
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-styled-components",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
