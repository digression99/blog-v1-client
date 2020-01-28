import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding: 1.2rem 0.8rem;
  border: 2px solid red;
  border-radius: 10px;
  h3 {
    margin: 0;
  }

  .title-box {
    margin-bottom: 0.8rem;
  }

  .tag-box {
    margin-bottom: 0.5rem;
  }

  .tag {
    margin-right: 1rem;
  }
`

const PostListItem = ({ title, tags, quote, createdAt, content }) => {
  return (
    <Container>
      <div className="title-box">
        <h3>{title}</h3>
      </div>
      <div className="tag-box">
        {tags.map(tag => (
          <span className="tag" key={tag.id}>
            {tag.name}{" "}
          </span>
        ))}
      </div>
      <div>{quote}</div>
    </Container>
  )
}

export default PostListItem
