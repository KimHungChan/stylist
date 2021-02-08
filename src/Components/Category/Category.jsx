import React from "react";
import { Link } from "react-router-dom";
import "./Category.scss";

const Category = ({ category }) => {
  return category ? (
    <Link
      className="category"
      to={{
        pathname: category.slug,
      }}
    >
      <span>{category.name}</span>
    </Link>
  ) : (
    <></>
  );
};

export default Category;
