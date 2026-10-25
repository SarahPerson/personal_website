// more tutorial on seo components https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/
import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title, description }) => {
    const data = useStaticQuery(graphql`
      query {
        site(siteMetadata: {title: {}}) {
          siteMetadata {
            title
          }
        }
      }
    `)

    return (
        <>
            <title>{title} | {data.site.siteMetadata.title}</title>
            {description && <meta name="description" content={description} />}
        </>
    )

}

export default Seo