import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import "./layout.css"
import Header from "./Header"
import SEO from "./seo"

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Merriweather", "sans-serif";
}
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Main = styled.main`
  max-width: 34rem;
  width: 100vw;
`

const PageLayout = ({ children }) => {
  return (
    <>
      <SEO />
      <Container>
        <Header />
        <Main>{children}</Main>
      </Container>
    </>
  )
}

export default PageLayout
