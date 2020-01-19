import React, {useState} from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1550 },
    items: 3,
  },
  desktopmini: {
    breakpoint: { max: 1550, min: 1300 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1300, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const query = graphql`
query{
  allInstaNode {
    edges {
      node {
        id
        timestamp
        caption
        localFile {
          childImageSharp {
            fixed(width: 400, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
}
`
const Box = styled.div`
  margin-top: 1%;
  margin-left: 1%;
  margin-right: 0%;
  margin-bottom: 1%;
  width:400px;
  height: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  /* display: inline-block;
    background: black;
    padding: 0;
  &:hover {
    opacity: 0.7;
    } */
  @media screen and (max-width: 1300px) {
    margin-left: 0%;
  } 
`
const Pictures = () => {
    const data = useStaticQuery(query)
      return (
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          //customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile","desktopmini"]}
          deviceType={"desktop"}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          slidesToSlide={1}
          additionalTransfrom={0}
          minimumTouchDrag={80}
        >
        {data.allInstaNode.edges.map(node => {
         return( 
         <Box>
           <a href={"https://www.instagram.com/p/"+node.node.id}>
           <Img fixed={node.node.localFile.childImageSharp.fixed}/>
           </a>
        </Box> )
        })}
      </Carousel>
        
      )
  }
export default Pictures