import React from "react"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Post from "../components/Post"

const input = `
# h1
* This is test h1
* This is test h2
`

const IndexPage = () => (
  <div>
    This is test
    <Post />
    <ReactMarkdown source={input} />
  </div>
)

export default IndexPage
