module.exports = {
  siteMetadata: {
    title: `Vadnir Vieira`,
    age: '24 Anos',
    profession: 'Fullstack Developer',
    description: `Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.`,
    author: `@vadyvarela`,
    siteUrl: `https://vadyvarela.com`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vadnir Vieira`,
        short_name: `Vadnir`,
        start_url: `/`,
        background_color: `#101010`,
        theme_color: `#101010`,
        display: `minimal-ui`,
        icon: `src/images/vady.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `concert one`,
          `dosis\:300,400,600,700`,
          `poppins\:400,600,700`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-sitemap`,
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
  ],
}
