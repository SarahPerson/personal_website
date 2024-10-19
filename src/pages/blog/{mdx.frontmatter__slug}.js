import * as React from 'react'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

// Use this to transform links in mdx https://www.gatsbyjs.com/plugins/gatsby-plugin-catch-links/
// Other cool thing https://www.gatsbyjs.com/plugins/@juvoni/gatsby-theme-networked-thought/?=garden

const BlogPost = ({data, children}) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>Posted: {data.mdx.frontmatter.date} </p>
            {children}
            <p>Last Updated: {data.mdx.frontmatter.last_updated} </p>
        </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      body
      id
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        slug
        title
        last_updated
      }
    }
  }`

export default BlogPost

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title}/>