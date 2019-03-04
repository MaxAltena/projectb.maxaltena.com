import React from "react";
import Social from "./Social";

const Socials = () => {
  return (
    <div className="Socials">
      <Social linkTo="mailto:max@maxaltena.com" icon="mail" />
      <Social linkTo="tel:+31639105742" icon="phone" />
    </div>
  );
};

export default Socials;
