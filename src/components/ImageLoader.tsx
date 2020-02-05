import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImg = styled(Img)`
  width:100%;
  height: 100%;
  display: block;
`

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
                fluid(maxHeight: 600) {
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
      return <StyledImg fluid={image.node.childImageSharp.fluid} />
    }}
  />
)

export default ImageLoader
