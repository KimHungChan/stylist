import React from "react";
import "./Image.scss";

const Image = ({ crop, image, width }) => {
  return (
    <div className="image">
      <img src={image.url} alt={image.alt} />
    </div>
  );
};

export default Image;
