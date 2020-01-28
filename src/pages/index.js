import React from "react"
import ReactMarkdown from "react-markdown"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import PostListItem from "../components/PostListItem"
import styled from "styled-components"
import mockupData from "../data"
import PageLayout from "../components/PageLayout"
import BackgroundImage from "gatsby-background-image"

const Banner = styled.div`
  margin-bottom: 2rem;
  display: flex;
  font-family: "Merriweather", "Georgia";

  .profile-image {
    border-radius: 50%;
  }

  .banner-right {
    margin-left: 1rem;
  }

  .intro-box {
    margin-top: 0.4rem;
  }

  .display-name {
    font-size: 0.9rem;
    font-weight: 700;
  }

  .introduction {
    font-size: 0.8rem;
    font-weight: 500;
  }
`

const BackgroundSection = styled(BackgroundImage)`
  width: 100%;
  background-size: cover;
`

const Recents = styled.h2`
  font-family: "Merriweather", "Roboto", "sans-serif";
  font-size: 1.1rem;
`

const IndexPage = ({ data }) => {
  const { posts, author, siteMeta, tags } = mockupData

  const fixedImage = data.profileImages.edges[2].node.childImageSharp.fixed
  const postImage = data.postImages.edges[2].node.childImageSharp.fluid

  return (
    <PageLayout>
      <Banner>
        <Image
          fixed={fixedImage}
          alt="profile img"
          className="profile-image"
        ></Image>
        <div className="banner-right">
          <div>
            <span className="display-name">{author.displayName}</span>
          </div>
          <div className="intro-box">
            <span className="introduction">{author.introduction}</span>
          </div>
        </div>
      </Banner>

      <div>
        <Recents>Recents</Recents>
        {posts.map((post, idx) => (
          <div key={post.id} idx={idx}>
            <BackgroundSection fluid={postImage} className="background-image">
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
    profileImages: allFile {
      edges {
        node {
          absolutePath
          childImageSharp {
            fixed(width: 100, height: 100, grayscale: true) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }

    postImages: allFile {
      edges {
        node {
          absolutePath
          childImageSharp {
            fluid(grayscale: true) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
