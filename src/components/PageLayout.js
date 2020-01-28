import React from "react"
import styled from "styled-components"
import Header from "./Header"
import SEO from "./seo"

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
