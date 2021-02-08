import React from "react";
import { Link } from "react-router-dom";
import "./Author.scss";

const Author = ({ authors }) => {
  return (
    <aside className="author-container">
      Written by <br />
      {authors.map((author, key) => (
        <Link
          to={{
            pathname: "author/" + author.slug,
          }}
          key={key}
        >
          {author.name}
        </Link>
      ))}
    </aside>
  );
};

export default Author;
