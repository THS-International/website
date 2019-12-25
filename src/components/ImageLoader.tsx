import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageLoader = props => (
  <StaticQuery
    query={graphql`
      query Image {
        allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(fit: COVER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allFile.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }
      return <Img fluid={image.node.childImageSharp.fluid} />
    }}
  />
)

export default ImageLoader
