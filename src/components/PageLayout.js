import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import "./layout.css"
import "antd/dist/antd.css"
import Header from "./Header"
import SEO from "./seo"
import Drawer from "./Drawer"

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
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <>
      <SEO />
      <Container>
        <Header showDrawer={showDrawer} />
        <Main>{children}</Main>
      </Container>
      <Drawer visible={visible} onClose={onClose} />
    </>
  )
}

export default PageLayout
