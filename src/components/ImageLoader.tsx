import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';



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
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      
      `}
      render={data => {
        console.log("Input" + props.filename)
        const image = data.allFile.edges.find(n => {
          return n.node.relativePath.includes(props.filename);
        });
        if (!image) {
          return null;
        }
  
        //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
        console.log(image.node.childImageSharp.fluid);
        return <Img fluid={image.node.childImageSharp.fluid} />;
      }}
    />
  );
  
  export default ImageLoader;