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
      {category.name}
    </Link>
  ) : (
    <></>
  );
};

export default Category;
