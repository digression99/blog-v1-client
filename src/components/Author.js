import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

const Container = styled.div`
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

const getAuthor = graphql`
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
  }
`

export default () => {
  const data = useStaticQuery(getAuthor)

  const fixedImage = data.profileImages.edges[2].node.childImageSharp.fixed
  const author = data.site.siteMetadata.author

  return (
    <Container>
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
    </Container>
  )
}
