import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  max-width: 34rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .header-title {
    color: green;
  }

  .hamberger-button {
  }
`

const Header = () => {
  return (
    <Container>
      <Link to="/" className="header-title">
        Pseudocoder Kim
      </Link>
      <div className="hamberger-button">
        <button>HBG</button>
      </div>
    </Container>
  )
}

export default Header
