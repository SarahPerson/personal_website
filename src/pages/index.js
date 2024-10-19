import * as React from "react"
import Greeting from "../components/greeting"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"
import { graphql } from 'gatsby'
import FlexColumnArticles from "../components/flex_column_article"
import styled from 'styled-components';

const TextImageContainer = styled.div`
  display: flex;
  align-items: stretch;
  gap: 2em; /* Adjust the gap as needed */
`;

const FlexText = styled.div`
  flex: 1;
`;

const HighlightImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify content: center;
  img {
    max-width: 100%;
    max-height: 80%;
    border-radius: 50%; /* Optional: Add some border radius for better aesthetics */
    object-fit: cover;
  }
`;

const IndexPage = ({ data }) => {
  const recentBlogPosts = data.allMdx.nodes.slice(0,3)
  return (
    <Layout pageTitle="Hi There! I'm Sarah Person-Waibel">
      <TextImageContainer>
        <FlexText>
          <p>I am a software developer, amateur analog photographer, endurance athlete, and lover of my cat Percy (oh and also my husband Mitch). I am currently working at Microsoft in Azure DNS where I support the Linux based authoritative serving plane. On this website, you can learn more about me and my professional experience, read through various thoughts I have explored, and see some of my various projects. 
          <br></br> 
          <br></br> 
          This website is a work in progress - it likely always be, but right now especially. I hope to carve out this little space on the internet for myself with the goal that I create and contribute more to the ether instead of consume, consume, <b>consume</b>. If you are interested to see my journey, I hope you check back in here from time to time! </p>
        </FlexText>
        <HighlightImage>
          <StaticImage src="../images/sarah_tree_hugger.jpeg" alt="Picture of Sarah Person-Waibel" /> 
        </HighlightImage>
      </TextImageContainer>
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

export const Head = () => <Seo title="Home Page"/>

