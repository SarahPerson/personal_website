import * as React from "react"

import { Link } from 'gatsby'

import {
  articleLink,
  articleDescriptionRow,
  articleDate,
  articleLine
} from './article_summary.module.css'

import {
    heading,
} from './layout.module.css'

const ArticleSummary = ({ title, posts }) => {
  return ( 
    <div>
      <h1 className={heading}>{title}</h1>
      <div>
      {
          posts.map(node => (
            <div key={node.id} className={articleDescriptionRow}>
              <span>
                <Link to={`/blog/${node.frontmatter.slug}`} className={articleLink}>{node.frontmatter.title}</Link>
              </span>
              <span className={articleLine}></span>
              <span className={articleDate}>{node.frontmatter.date}</span>
            </div>
          ))
      }
      </div>
    </div>
  )
}
export default ArticleSummary