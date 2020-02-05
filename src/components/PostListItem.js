import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rgba } from "polished"
import TagBox from "./TagBox"

const Container = styled(Link)`
  display: block;
  padding: 5rem 0 0.8rem 0;
  font-family: "Merriweather", "Roboto", "sans-serif";
  text-decoration: none;
  color: inherit;

  .background {
    padding: 0.8rem 0 0.4rem 1rem;
    background-color: ${({ order }) =>
      order % 2 === 0 ? rgba("#f1f3f5", 0.8) : rgba("#e9ecef", 0.8)};
  }

  .title-box {
    h3 {
      margin: 0;
      font-weight: 700;
      font-family: inherit;
      font-size: 1rem;
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

  .created-at {
    font-size: 0.6rem;
  }

  .quote {
    font-size: 0.8rem;
    padding: 0.1rem 0;
  }
`

const PostListItem = ({
  slug,
  title,
  tags,
  quote,
  createdAt,
  content,
  order,
}) => {
  return (
    <Container order={order} to={`/${slug}`}>
      <div className="background">
        <div className="title-box">
          <h3>{title}</h3>
          <div className="created-at">{createdAt}</div>
        </div>
        <div className="quote">{quote}</div>
        <TagBox tags={tags} />
      </div>
    </Container>
  )
}

export default PostListItem
