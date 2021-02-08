import React from "react";
import styled from "styled-components";
import "./Image.scss";

const Image = ({ crop, image, width }) => {
  const cropWidth = crop + "-width";
  console.log("🚀 ~ file: Image.jsx ~ line 7 ~ Image ~ cropWidth", cropWidth);
  const cropHeight = crop + "-height";

  // Just to explain, I had some code here that gave the exact width specified in the API
  // but I've commented it out for a max width to fix within the widgetSection.
  // I was unsure if I was really supposed to use those widths and heights as it looked
  // strange so I just went with that the official page did.
  const StyledImage = styled.img`
    color: grey;
    display: block;
    margin: 2rem auto 3rem auto;
    max-width: 900px;
    // width: ${(props) => props.image?.sizes[cropWidth]}px;
    // height: ${(props) => props.image?.sizes[cropHeight]}px;
    width: 100%;
    height: auto;
    content: url(${(props) => props.image?.sizes[crop] || ""});
  `;

  return (
    <figure className="image">
      <StyledImage image={image} />
    </figure>
  );
};

export default Image;
