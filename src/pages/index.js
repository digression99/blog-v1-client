import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import PostListItem from "../components/PostListItem"
import styled from "styled-components"
import PageLayout from "../components/PageLayout"
import Author from "../components/Author"

const BackgroundSection = styled(BackgroundImage)`
  width: 100%;
  background-size: cover;
`

const Recents = styled.h2`
  font-family: "Merriweather", "Roboto", "sans-serif";
  font-size: 1.1rem;
`

const IndexPage = ({ data }) => {
  const posts = data.posts.edges.map(edge => edge.node)

  return (
    <PageLayout>
      <Author />
      <div>
        <Recents>Recents</Recents>
        {posts.map((post, idx) => (
          <div key={post.id} idx={idx}>
            <BackgroundSection
              fluid={post.bannerImage.childImageSharp.fluid}
              className="background-image"
            >
              <PostListItem {...post} order={idx} />
            </BackgroundSection>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

export const getImages = graphql`
  {
    site {
      siteMetadata {
        bannerTitle
        bannerDescription
        bannerProfileUrl
        githubUrl
        linkedinUrl
        author: landingAuthor {
          displayName
          picUrl
          introduction
        }
      }
    }

    posts: allStrapiPost {
      edges {
        node {
          id
          title
          content
          quote
          slug
          createdAt: created_at(formatString: "MMMM D, YYYY")

          bannerImage {
            childImageSharp {
              fluid(grayscale: true) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          tags {
            id
            name
          }
        }
      }
    }
  }
`

export default IndexPage
