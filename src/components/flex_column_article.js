import * as React from "react"

import { Link } from 'gatsby'

import {
  columnPostContainer,
  articlesContainer,
  articleLink
} from './flex_column_article.module.css'

import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkActive,
    navLinkText,
    siteTitle,
} from './layout.module.css'

const FlexColumnArticles = ({ title, posts }) => {
  return ( 
    <div className={articlesContainer}>
      <h1 className={heading}>{title}</h1>
      <div className={columnPostContainer}>
      {
          posts.map(node => (
            <article key={node.id}>
              <h2>
                <Link to={`/blog/${node.frontmatter.slug}`} className={articleLink}>{node.frontmatter.title}</Link>
              </h2>
              <p>{node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
              <p><b>Updated:</b> {node.frontmatter.last_updated}</p>
            </article>
          ))
      }
      </div>
    </div>
  )
}
export default FlexColumnArticles
