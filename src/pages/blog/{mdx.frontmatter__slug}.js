import * as React from 'react'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { MDXProvider } from '@mdx-js/react'
import { 
  blogHeading,
  mdxContent,
  date,
 } from './blog.module.css'

// Use this to transform links in mdx https://www.gatsbyjs.com/plugins/gatsby-plugin-catch-links/
// Other cool thing https://www.gatsbyjs.com/plugins/@juvoni/gatsby-theme-networked-thought/?=garden

const BlogPost = ({data, children}) => {
    return (
        <Layout>
          <h1 className={blogHeading}>{data.mdx.frontmatter.title}</h1>
          <span className={date}>Posted: {data.mdx.frontmatter.date} </span>
          <div className={mdxContent}>
              {children}
          </div>
          <span className={date}>Last Updated: {data.mdx.frontmatter.last_updated} </span>
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