import React from "react"
import styled from "styled-components"

const Container = styled.div`
  .tag-box {
    margin-bottom: 0.5rem;
  }

  .tag {
    display: inline-block;
    margin-right: 1rem;
    font-family: inherit;
    font-size: 0.75rem;
    background-color: #adb5bd;
    padding: 0.05rem 0.2rem;
    border-radius: 2px;
  }
`

const TagBox = ({ tags }) => {
  return (
    <Container className="tag-box">
      {tags.map(tag => (
        <span className="tag" key={tag.id}>
          {tag.name}{" "}
        </span>
      ))}
    </Container>
  )
}

export default TagBox
