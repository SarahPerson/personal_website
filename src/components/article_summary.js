import * as React from "react"

import { Link } from 'gatsby'

import {
  articleLink
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
            <article key={node.id}>
              <h2>
                <Link to={`/blog/${node.frontmatter.slug}`} className={articleLink}>{node.frontmatter.title}</Link>
              </h2>
              <p>{node.frontmatter.date}</p>
            </article>
          ))
      }
      </div>
    </div>
  )
}
export default ArticleSummary