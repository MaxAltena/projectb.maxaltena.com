import React from "react";
import Social from "./Social";

const Socials = () => {
  return (
    <div className="Socials">
      <Social linkTo="mailto:max@maxaltena.com" icon="mail" />
      <Social linkTo="tel:+31639105742" icon="phone" />
      <Social
        linkTo="https://trello.com/b/cMiFjg4o/the-parkinson-project"
        icon="trello"
        iconType="fontawesome-brand"
      />
      <Social
        linkTo="https://drive.google.com/open?id=13KIHMT8Ha8IxsnSJLqduk32A-48Cw4VT"
        icon="google-drive"
        iconType="fontawesome-brand"
      />
    </div>
  );
};

export default Socials;
