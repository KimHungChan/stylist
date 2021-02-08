import React from "react";
import "./Title.scss";

const Title = ({ title }) => {
  return (
    <h1
      style={{
        fontSize: "2.75rem",
        fontFamily: "Playfair Display",
        fontWeight: "1000",
      }}
    >
      {title}
    </h1>
  );
};

export default Title;
