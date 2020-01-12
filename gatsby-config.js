require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Creative Portfolio'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATO_API_TOKEN
      }
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'kusus.work'
      }
    }
  ]
}
