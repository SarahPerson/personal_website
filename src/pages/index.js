import * as React from "react"
import Greeting from "../components/greeting"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"
import { graphql } from 'gatsby'
import FlexColumnArticles from "../components/flex_column_article"


const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const IndexPage = ({ data }) => {
  const recentBlogPosts = data.allMdx.nodes.slice(0,3)
  return (
    <Layout pageTitle="Hi There! I'm Sarah Person-Waibel">
      <p>I am a software developer, amateur analog photographer, endurance athlete, and lover of my cat Percy (oh and also my husband Mitch). I am currently working at Microsoft in Azure DNS where I support the Linux based authoritative serving plane. On this website, you can learn more about me and my professional experience, read through various thoughts I have explored, and see some of my various projects. 
      <br></br> 
      <br></br> 
      This website is a work in progress - it likely always be, but right now especially. I hope to carve out this little space on the internet for myself with the goal that I create and contribute more to the ether instead of consume, consume, <b>consume</b>. If you are interested to see my journey, I hope you check back in here from time to time! </p>
      <FlexColumnArticles title="My Top of Mind" posts={recentBlogPosts}></FlexColumnArticles>
    </Layout>
  )
}

export default IndexPage

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

export const Head = () => <Seo title="Home Page"/>

