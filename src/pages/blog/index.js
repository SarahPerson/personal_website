import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'
import {
    columnPostContainer
} from './../../components/layout.module.css'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="--Blog--">
          <div>
          <h1>Recently Updated Thoughts</h1>
          <div className={columnPostContainer}>
          {
              data.allMdx.nodes.slice(0,3).map(node => (
                <article key={node.id}>
                  <h2>
                    <Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                  </h2>
                  <p>Posted: {node.frontmatter.date}</p>
                  <p>{node.excerpt}</p>
                  <p>Last Updated: {node.frontmatter.last_updated}</p>
                </article>
              ))
          }
          </div>
          </div>
          <h1>All Other Thoughts</h1>
          {
              data.allMdx.nodes.slice(0,3).map(node => (
                <article key={node.id}>
                  <h2>
                    <Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                  </h2>
                  <p>Posted: {node.frontmatter.date}</p>
                </article>
              ))
          }

        </Layout>
    )
}

export default BlogPage

export const query = graphql `{
  allMdx(sort: {frontmatter: {last_updated: DESC}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        last_updated(formatString: "MMMM D, YYYY - h:mm a")
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

