module.exports = {
  siteMetadata: {
    title: "Site title",
    author: "me =)",
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src/posts",
        path: `${__dirname}/src/posts`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
    },
  ],
}

// Chris Lau
// Chris Lau
// 8 months ago
// export const query = graphql`
//     query($slug: String!){
//         post: contentfulBlogPost(slug:{eq:$slug}){
//             title
//             publishedDate(formatString: "MMMM Do, YYYY")
//             body{
//                 raw

//                 references{

//                     contentful_id

//                     title

//                     fixed{

//                         src

//                     }

//                 }

//             }

//         }

//     }

// `
