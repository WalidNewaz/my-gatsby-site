import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map(node => (
            <article key={node.id}>
                <h2>{node.frontmatter.title}</h2>
                <p>Posted: {node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
            </article>
        ))
      }
    </Layout>
  )
}

// Queries the blog directory for file names
export const query = graphql`
  {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          slug
          title
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage