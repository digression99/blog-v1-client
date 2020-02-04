import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import PageLayout from "../components/PageLayout"
import ReactMarkdown from "react-markdown"

const Post = ({ data }) => {
  const { title, content } = data.post

  return (
    <PageLayout>
      <div>
        <h1>{title}</h1>
        <div>
          <ReactMarkdown source={content} />
        </div>
      </div>
    </PageLayout>
  )
}

export const getPost = graphql`
  query($slug: String!) {
    post: strapiPost(slug: { eq: $slug }) {
      title
      content
      slug
    }
  }
`

export default Post
