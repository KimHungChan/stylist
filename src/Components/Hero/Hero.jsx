import React from 'react'
import styled from 'styled-components';

const Hero = ({heroImage}) => {
console.log("🚀 ~ file: Hero.jsx ~ line 5 ~ Hero ~ heroImage", heroImage)
    const Image = styled.img`
  color: grey;
  width: ${props => props.width || "20rem"};
//   height: 10rem;
content: url(${props => props.heroImage.url || ""});
  @media (max-width: 600px) {
    content: url(${props => props.heroImage.sizes.portrait || ""});
  }
`;
    return (
        <div className="hero-container">
            {/* <img src={heroImage.url} alt={heroImage.alt}/> */}
            <Image heroImage={heroImage}></Image>
            {/* <Image src={heroImage.sizes.landscape}></Image>
            <Image src={heroImage.sizes.letterbox}></Image>
            <Image src={heroImage.sizes.portrait}></Image>
            <Image src={heroImage.sizes.square}></Image> */}
        </div>
    )
}

export default Hero
