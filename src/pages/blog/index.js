import * as React from 'react'
import Layout from '../../components/layout'
import FlexColumnArticles from '../../components/flex_column_article'
import ArticleSummary from '../../components/article_summary'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    const recentBlogPosts = data.recentlyUpdated.nodes.slice(0,3)
    return (
        <Layout>
          <FlexColumnArticles title="Recently Updated" posts={recentBlogPosts}></FlexColumnArticles>
          <ArticleSummary title="All Other Thoughts" posts={data.allData.nodes}></ArticleSummary>
        </Layout>
    )
}

export default BlogPage

export const query = graphql `{
  recentlyUpdated: allMdx(sort: {frontmatter: {last_updated: DESC}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        last_updated(formatString: "MMMM D, YYYY")
        slug
        title
      }
      id
      excerpt
    }
  }
  allData: allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        last_updated(formatString: "MMMM D, YYYY")
        slug
        title
      }
      id
      excerpt
    }
  }
}`
export const Head = () => <Seo title="Blog"/>

