import React from "react";
import { Link } from "react-router-dom";
import TPP from "../../assets/TPP";

const Logo = ({ type }) => {
  switch (type) {
    case "link":
      return (
        <Link to="/" className="Logo">
          {TPP()}
        </Link>
      );
    case "a":
    default:
      return (
        <a href="/" className="Logo">
          {TPP()}
        </a>
      );
  }
};

export default Logo;
