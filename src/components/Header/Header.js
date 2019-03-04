import React from "react";
import Logo from "./Logo";
import Socials from "./Socials";

const Header = ({ cN, type }) => {
  return (
    <header className={cN}>
      <Logo type={type} />
      <Socials />
    </header>
  );
};

export default Header;
