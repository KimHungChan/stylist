import React from "react";
import "./Standfirst.scss";

const Standfirst = ({ standfirst, author }) => {
  return (
    <div className="standfirst">
      {author}
      <p>{standfirst}</p>
    </div>
  );
};

export default Standfirst;
