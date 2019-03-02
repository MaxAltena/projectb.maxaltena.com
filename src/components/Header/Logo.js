import React from "react";
import { Link } from "react-router-dom";
import TPP from "../../assets/TPP";

const Logo = () => {
  return (
    <Link to="/" className="Logo">
      {TPP()}
    </Link>
  );
};

export default Logo;
