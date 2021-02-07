import React from "react";
import { Link } from "react-router-dom";
import "./Author.scss";

const Author = ({ authors }) => {
  return (
    <aside className="author-container">
      Written by <br />
      {authors.map((author) => (
        <Link
          to={{
            pathname: "author/" + author.slug,
          }}
        >
          {author.name}
        </Link>
      ))}
    </aside>
  );
};

export default Author;
