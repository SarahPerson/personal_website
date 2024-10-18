import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkActive,
    navLinkText,
    siteTitle
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
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
        <div className={container}>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to='/' className={navLinkText} activeClassName={navLinkActive}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to='/about' className={navLinkText} activeClassName={navLinkActive}>
                            About
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to='/blog' className={navLinkText} activeClassName={navLinkActive}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}


export default Layout