import React from "react"
import ReactMarkdown from "react-markdown"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import PostListItem from "../components/PostListItem"
import styled from "styled-components"
import mockupData from "../data"
import PageLayout from "../components/PageLayout"

const PostList = styled.div`
  .list-item {
    margin-bottom: 1rem;
  }
`

const Banner = styled.div`
  .profile-image {
    border-radius: 50%;
  }
`

const IndexPage = ({ data }) => {
  const { posts, author, siteMeta, tags } = mockupData
  console.log("graphql data is : ", data)

  return (
    <PageLayout>
      <Banner>
        <Image
          fixed={data.allFile.edges[2].node.childImageSharp.fixed}
          alt="profile img"
          className="profile-image"
        ></Image>
        <span>{author.displayName}</span>
      </Banner>

      <PostList>
        <h2>Recents</h2>
        {posts.map(post => (
          <div className="list-item" key={post.id}>
            <PostListItem {...post} />
          </div>
        ))}
      </PostList>
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
