import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: auto;
  background-image: url(${(props) => props.heroImage.sizes.landscape || ""});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 66.6667%;
  @media (min-width: 34.375rem) {
    padding-top: 66.6667%;
  }
  @media (min-width: 50rem) {
    background-image: url(${(props) => props.heroImage.sizes.letterbox || ""});
  }
`;
const Hero = ({ heroImage }) => {
  return <Image heroImage={heroImage}></Image>;
};

export default Hero;
