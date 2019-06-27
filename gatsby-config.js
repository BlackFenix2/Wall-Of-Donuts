module.exports = {
  siteMetadata: {
    title: 'Wall of Donuts',
    description:
      'Wall of donuts, what else needs to be said? (a lot, this is an work in progress).',
    author: '@BlackFenix2'
  },
  plugins: [
    'gatsby-plugin-layout',
    'gatsby-plugin-eslint',
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'wall-of-donuts',
        short_name: 'donutwall',
        start_url: '/',
        background_color: '#866539',
        theme_color: '#FDBA55',
        display: 'minimal-ui',
        icon: 'src/images/Icon.png' // This path is relative to the root of the site.
      }
    },
    //add support for absolute paths for gatsby loader
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          src: 'src'
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline'
  ]
};
