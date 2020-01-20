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
    breakpoint: { max: 1550, min: 900 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 900, min: 464 },
    items: 2,
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
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`
const ImageContainer = styled.div`
  text-align: center;
  width: 100%;
  overflow: hidden;
  display:block;

  > div {
    display: block;
    height: 100%;

    > img {
    }
  }
`

const Box = styled.div`
  margin-left: 1%;
  width:80%;
  height: 80%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  display: inline-block;
  /* display: inline-block;
    background: black;
    padding: 0;
  &:hover {
    opacity: 0.7;
    } */
  @media screen and (max-width: 464px) {
    width:90%;
  } 
`
const StyledImg = styled(Img)`
  width:100%;
  height: 100%;
  display: block;
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
          autoPlaySpeed={4000}
          keyBoardControl={true}
          //customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
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
            <StyledImg fluid={node.node.localFile.childImageSharp.fluid}/>
            </a>
        </Box> )
        })}
      </Carousel>
        
      )
  }
export default Pictures