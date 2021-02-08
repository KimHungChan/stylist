import React from "react";
import { Link } from "react-router-dom";
import "./Tags.scss";

const Tags = ({ tags }) => {
  return (
    <section className="tags-section">
      <h2>Topics</h2>
      <ul>
        {tags.map((tag, key) => (
          <li key={key}>
            <Link
              to={{
                pathname: "tag/" + tag.slug,
              }}
            >
              {tag.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tags;
