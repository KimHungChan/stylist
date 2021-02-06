import React from "react";
import { Link } from "react-router-dom";

const Tags = ({ tags }) => {
  return (
    <section>
      <h2>Topics</h2>
      <ul>
        {tags.map((tag) => (
          <li>
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
