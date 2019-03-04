import React from "react";
import Logo from "./Logo";
import Socials from "./Socials";

const Header = ({ cN }) => {
  return (
    <header className={cN}>
      <Logo />
      <Socials />
    </header>
  );
};

export default Header;
