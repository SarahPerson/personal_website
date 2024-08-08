import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="--Blog--">
          {
              data.allMdx.nodes.map(node => (
                <article key={node.id}>
                  <h2>
                    <Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                  </h2>
                  <p>Posted: {node.frontmatter.date}</p>
                  <p>{node.excerpt}</p>
                  <p>Last Updated: {node.parent.modifiedTime}</p>
                </article>
              ))
          }
        </Layout>
    )
}

export default BlogPage

export const query = graphql `query {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        slug
        title
      }
      id
      excerpt
      parent {
        ... on File {
          id
          name
          modifiedTime(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
}`
export const Head = () => <Seo title="Blog"/>

