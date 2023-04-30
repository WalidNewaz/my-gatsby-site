import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {/* <p>My cool posts will go in here</p> */}
      <ul>
      {
        data.allFile.nodes.map(node => (
            <li key={node.name}>{node.name}</li>
        ))
      }
      </ul>
    </Layout>
  )
}

// Queries the blog directory for file names
export const query = graphql`
  {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage