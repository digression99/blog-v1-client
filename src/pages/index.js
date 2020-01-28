import React from "react"
import ReactMarkdown from "react-markdown"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import PostListItem from "../components/PostListItem"
import styled from "styled-components"
import mockupData from "../data"
import PageLayout from "../components/PageLayout"

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

const ListItem = styled.div`
  background-color: ${({ idx }) => (idx % 2 === 0 ? "#f1f3f5" : "#e9ecef")};
`

const Recents = styled.h2`
  font-family: "Merriweather", "Roboto", "sans-serif";
  font-size: 1.1rem;
`

const IndexPage = ({ data }) => {
  const { posts, author, siteMeta, tags } = mockupData

  return (
    <PageLayout>
      <Banner>
        <Image
          fixed={data.allFile.edges[2].node.childImageSharp.fixed}
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
          <ListItem className="list-item" key={post.id} idx={idx}>
            <PostListItem {...post} />
          </ListItem>
        ))}
      </div>
    </PageLayout>
  )
}

export const getImages = graphql`
  {
    allFile {
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
  }
`

export default IndexPage
