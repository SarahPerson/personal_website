import * as React from "react"

import { Link } from 'gatsby'

import {
  columnPostContainer,
  articlesContainer,
  articleLink,
  articleCard,
  articleTitle,
  articleDate,
  articleExcerpt,
  articleUpdated,
} from './flex_column_article.module.css'

import {
    heading,
} from './layout.module.css'

const FlexColumnArticles = ({ title, posts }) => {
  return ( 
    <div className={articlesContainer}>
      <h1 className={heading}>{title}</h1>
      <div className={columnPostContainer}>
      {
          posts.map(node => (
            <Link to={`/blog/${node.frontmatter.slug}`} className={articleCard} key={node.id}>
              <h2 className={articleTitle}>{node.frontmatter.title}</h2>
              <p className={articleDate}>{node.frontmatter.date}</p>
              <p className={articleExcerpt}>{node.excerpt}</p>
              <p className={articleUpdated}><b>Updated:</b> {node.frontmatter.last_updated}</p>
            </Link>
          ))
      }
      </div>
    </div>
  )
}
export default FlexColumnArticles
