import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background: red;
`

const Post = () => {
  return (
    <Container>
      <h2>This is post title</h2>
      <div>This is post</div>
    </Container>
  )
}

export default Post
