import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background: green;
`

const PostListItem = ({ title, tags, quote, createdAt, content }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <div>
        {tags.map(tag => (
          <span>{tag.name} </span>
        ))}
      </div>
      <div>{quote}</div>
    </Container>
  )
}

export default PostListItem
