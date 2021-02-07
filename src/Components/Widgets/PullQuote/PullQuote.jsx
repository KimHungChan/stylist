import React from "react";

const PullQuote = ({ text, width }) => {
  return (
    <div>
      <aside>
        <hr />
        <blockquote>{text}</blockquote>
        <hr />
      </aside>
    </div>
  );
};

export default PullQuote;
