import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  max-width: 34rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .header-title {
    color: black;
    text-decoration: none;
    font-size: 2.4rem;
    font-family: "Merriweather", "Roboto";
    font-weight: 700;
  }

  .hamberger-button {
    height: 2rem;
    background: none;
    border: none;
  }
`

const Header = ({ showDrawer }) => {
  return (
    <Container>
      <div>
        <Link to="/" className="header-title">
          Pseudocoder Kim
        </Link>
      </div>
      <div>
        <button onClick={showDrawer} className="hamberger-button">
          HBG
        </button>
      </div>
    </Container>
  )
}

export default Header
