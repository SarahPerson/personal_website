import * as React from 'react'
import Layout from '../../components/layout'
import FlexColumnArticles from '../../components/flex_column_article'
import ArticleSummary from '../../components/article_summary'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'
import {
    columnPostContainer
} from './../../components/layout.module.css'

const BlogPage = ({ data }) => {
    const recentBlogPosts = data.allMdx.nodes.slice(0,3)
    return (
        <Layout>
          <FlexColumnArticles title="Recently Updated" posts={recentBlogPosts}></FlexColumnArticles>
          <ArticleSummary title="All Other Thoughts" posts={data.allMdx.nodes}></ArticleSummary>
        </Layout>
    )
}

export default BlogPage

export const query = graphql `{
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        last_updated(formatString: "M/D/YY - h:mm a")
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

