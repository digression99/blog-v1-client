import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding: 1.2rem 0.8rem;
  font-family: "Merriweather", "Roboto", "sans-serif";

  .title-box {
    margin-bottom: 0.8rem;

    h3 {
      margin: 0;
      font-weight: 700;
      font-family: inherit;
      font-size: 0.9rem;
    }
  }

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

  .quote {
    font-size: 0.8rem;
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
      <div className="quote">{quote}</div>
    </Container>
  )
}

export default PostListItem
