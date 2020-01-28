import React from "react"
import ReactMarkdown from "react-markdown"
import PostListItem from "../components/PostListItem"
import styled from "styled-components"
import data from "../data"

const input = `
# h1
* This is test h1
* This is test h2
`

console.log("data is : ", data)

const PostList = styled.div`
  margin-bottom: 1rem;
`

const IndexPage = () => {
  const { posts, author, siteMeta, tags } = data

  return (
    <div>
      <div>
        <h4>This is author data</h4>
        <div>
          <span>displayName : {author.displayName}</span>
        </div>
      </div>

      <div>
        <h1>This is post list area.</h1>
        {posts.map(post => (
          <PostList>
            <PostListItem {...post} />
          </PostList>
        ))}
      </div>
    </div>
  )
}

export default IndexPage
