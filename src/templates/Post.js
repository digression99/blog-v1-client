import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import { rgba } from "polished"
import PageLayout from "../components/PageLayout"
import TagBox from "../components/TagBox"
import Author from "../components/Author"

const Container = styled.div`
  font-family: "Merriweather", "Roboto", "sans-serif";
  .content-container {
    /* background-color: ${rgba("#f1f3f5", 0.9)}; */
    padding-bottom: 2rem;
  }

  .post-title {
    color: rgba(0, 0, 0, 0.5);
    margin: 0;
    margin-bottom: 0.8rem;
  }

  .image-container {
    max-height: 450px;
    overflow: hidden;
  }

  .created-at {
    margin-bottom: 0.6rem;
    color: rgba(0, 0, 0, 0.4);
    font-size: 0.8rem;
  }

  .post-content {
    margin: 1rem 0;
  }
`

const Post = ({ data }) => {
  const {
    title,
    content,
    slug,
    quote,
    tags,
    bannerImage,
    createdAt,
  } = data.post

  return (
    <PageLayout>
      <Container>
        <h1 className="post-title">{title}</h1>
        <div className="created-at">{createdAt}</div>
        <div className="content-container">
          <div className="image-container">
            <Image fluid={bannerImage.childImageSharp.fluid} />
          </div>

          <div className="post-content">
            <ReactMarkdown source={content} />
          </div>
          <TagBox tags={tags} />
        </div>
        <Author />
      </Container>
    </PageLayout>
  )
}

export const getPost = graphql`
  query($slug: String!) {
    post: strapiPost(slug: { eq: $slug }) {
      title
      content
      slug
      quote
      createdAt: created_at(formatString: "D, MMM, YYYY")

      tags {
        id
        name
      }

      bannerImage {
        childImageSharp {
          fluid(grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default Post
