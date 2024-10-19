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
import Footer from './footer'

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
            <header className={siteTitle}>{data.site.siteMetadata.title}
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to='/' className={navLinkText} activeClassName={navLinkActive}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to='/blog' className={navLinkText} activeClassName={navLinkActive}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            </header>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        <Footer/>
        </div>
    )
}


export default Layout